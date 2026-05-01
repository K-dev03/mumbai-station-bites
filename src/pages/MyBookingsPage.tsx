import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

type Booking = {
  id: number;
  restaurant_name: string;
  booking_date: string;
  booking_time: string;
  guests: number;
};

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/my-bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to fetch bookings");
        return;
      }

      setBookings(data);
    } catch {
      toast.error("Server error");
    }
  };

  const handleCancel = async (id: number) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Cancel failed");
        return;
      }

      toast.success("Booking cancelled");

      fetchBookings(); // refresh
    } catch {
      toast.error("Server error");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No bookings found
          </p>
        ) : (
          bookings.map((b) => (
            <Card key={b.id} className="mb-4">
              <CardContent className="p-4">
                <p><b>Restaurant:</b> {b.restaurant_name}</p>
                <p><b>Date:</b> {b.booking_date}</p>
                <p><b>Time:</b> {b.booking_time}</p>
                <p><b>Guests:</b> {b.guests}</p>

                <Button
                  className="mt-4 bg-red-500 hover:bg-red-600"
                  onClick={() => handleCancel(b.id)}
                >
                  Cancel Booking
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookingsPage;