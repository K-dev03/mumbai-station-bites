import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, PartyPopper } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getRestaurantById, getStationById } from '@/data/stationsData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingPage = () => {
  const { stationId, restaurantId } = useParams<{ stationId: string; restaurantId: string }>();
  const station = getStationById(stationId || '');
  const restaurant = getRestaurantById(stationId || '', restaurantId || '');

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [tableNumber, setTableNumber] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTable = Math.floor(Math.random() * 20) + 1;
    setTableNumber(randomTable);
    setIsBooked(true);
  };

  if (!station || !restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            to={`/station/${stationId}/restaurant/${restaurantId}`} 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {restaurant.name}
          </Link>

          {!isBooked ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto"
            >
              <Card className="shadow-2xl border-border/50">
                <CardHeader className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold font-montserrat">
                    Book a Table at <span className="text-gradient">{restaurant.name}</span>
                  </h1>
                  <p className="text-muted-foreground">Near {station.name} Station</p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Select Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="pl-10"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Select Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                        <Select value={time} onValueChange={setTime} required>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Choose a time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                        <Select value={guests} onValueChange={setGuests} required>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gradient-primary hover:opacity-90 text-lg py-6"
                    >
                      Confirm Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto"
            >
              <Card className="shadow-2xl border-border/50 overflow-hidden">
                <div className="gradient-primary p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <PartyPopper className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
                  </motion.div>
                  <h1 className="text-3xl font-bold font-montserrat text-primary-foreground">
                    Booking Confirmed!
                  </h1>
                </div>

                <CardContent className="p-8">
                  <div className="space-y-6 text-center">
                    <div className="bg-secondary/50 rounded-2xl p-6">
                      <h2 className="text-xl font-bold mb-4">{restaurant.name}</h2>
                      
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="bg-card p-4 rounded-xl">
                          <p className="text-sm text-muted-foreground mb-1">Table Number</p>
                          <p className="text-2xl font-bold text-primary">#{tableNumber}</p>
                        </div>
                        <div className="bg-card p-4 rounded-xl">
                          <p className="text-sm text-muted-foreground mb-1">Guests</p>
                          <p className="text-2xl font-bold">{guests}</p>
                        </div>
                        <div className="bg-card p-4 rounded-xl">
                          <p className="text-sm text-muted-foreground mb-1">Date</p>
                          <p className="text-lg font-semibold">
                            {new Date(date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <div className="bg-card p-4 rounded-xl">
                          <p className="text-sm text-muted-foreground mb-1">Time</p>
                          <p className="text-lg font-semibold">{time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Confirmation sent to your email</span>
                    </div>

                    <Link to="/">
                      <Button variant="outline" className="mt-4">
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
