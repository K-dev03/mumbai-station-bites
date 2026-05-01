import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { getRestaurantById, getStationById } from "@/data/stationsData";

const BookingPage = () => {
  const { stationId, restaurantId } = useParams();

  const station = getStationById(stationId || "");
  const restaurant = getRestaurantById(stationId || "", restaurantId || "");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const convertTo24Hour = (timeStr) => {
    const [timePart, modifier] = timeStr.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours) + 12);
    }
    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }

    return `${hours}:${minutes}:00`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          restaurant_name: restaurant.name,
          booking_date: date,
          booking_time: convertTo24Hour(time),
          guests: Number(guests),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Booking failed");
        return;
      }

      toast.success("Booking successful 🎉");

      // reset form
      setDate("");
      setTime("");
      setGuests("");
    } catch (err) {
      toast.error("Server error");
    }
  };

  if (!restaurant || !station) {
    return <div className="text-center mt-20">Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 max-w-xl mx-auto px-4">
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold text-center">
              Book at {restaurant.name}
            </h1>
            <p className="text-center text-muted-foreground">
              Near {station.name}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Date</Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "12:00 PM",
                      "1:00 PM",
                      "7:00 PM",
                      "8:00 PM",
                      "9:00 PM",
                    ].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Guests</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger>
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6].map((n) => (
                      <SelectItem key={n} value={n.toString()}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                Confirm Booking
              </Button>
            </form>

            <Link to="/my-bookings">
              <Button className="w-full mt-4">
                Go to Your Bookings
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingPage;