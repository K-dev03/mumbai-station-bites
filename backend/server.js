const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const SECRET = "khushi_secret_key";

// ================== MYSQL CONNECTION ==================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jetha",
  database: "mumbai_station_bites"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// ================== JWT MIDDLEWARE ==================
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Invalid token format" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Invalid or expired token" });

    req.userId = decoded.id;
    next();
  });
};

// ================== SIGNUP ==================
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length > 0)
        return res.status(400).json({ message: "User already exists" });

      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password],
        (err) => {
          if (err) return res.status(500).json(err);

          res.status(201).json({ message: "User registered successfully" });
        }
      );
    }
  );
});

// ================== LOGIN ==================
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0)
        return res.status(400).json({ message: "User not found" });

      const user = result[0];

      if (password !== user.password)
        return res.status(400).json({ message: "Password doesn't match" });

      const token = jwt.sign({ id: user.id }, SECRET, {
        expiresIn: "1h",
      });

      res.json({
        message: "Login successful",
        token,
        userId: user.id,
      });
    }
  );
});

// ================== BOOKING ==================
app.post("/booking", authenticateToken, (req, res) => {
  const userId = req.userId;

  const { restaurant_name, booking_date, booking_time, guests } = req.body;

  if (!restaurant_name || !booking_date || !booking_time || !guests) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO bookings
    (user_id, restaurant_name, booking_date, booking_time, guests)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [userId, restaurant_name, booking_date, booking_time, guests],
    (err, result) => {
      if (err) {
        console.error("Booking Error:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(201).json({
        message: "Booking successful",
        bookingId: result.insertId,
      });
    }
  );
});

// ================== GET BOOKINGS ==================
app.get("/my-bookings", authenticateToken, (req, res) => {
  const userId = req.userId;

  const sql = `
    SELECT * FROM bookings 
    WHERE user_id = ? 
    ORDER BY booking_date DESC, booking_time DESC
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    res.json(result);
  });
});

// ================== DELETE BOOKING ==================
app.delete("/booking/:id", authenticateToken, (req, res) => {
  const bookingId = req.params.id;
  const userId = req.userId;

  const sql = "DELETE FROM bookings WHERE id = ? AND user_id = ?";

  db.query(sql, [bookingId, userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking cancelled successfully" });
  });
});

// ================== START SERVER ==================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});