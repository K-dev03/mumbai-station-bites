import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Instagram, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';

import DishCard from '@/components/DishCard';
import { getRestaurantById, getStationById } from '@/data/stationsData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RestaurantPage = () => {
  const { stationId, restaurantId } = useParams<{ stationId: string; restaurantId: string }>();
  const station = getStationById(stationId || '');
  const restaurant = getRestaurantById(stationId || '', restaurantId || '');

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
     {/* Hero Section */}
<section className="pt-20">
  <div className="relative h-[50vh] min-h-[350px]">
    <img
      src={restaurant.image}
      alt={restaurant.name}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="container mx-auto px-4 py-8">
    <Link 
      to={`/station/${stationId}`} 
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to {station.name}
    </Link>

    <div className="flex flex-wrap items-center gap-3 mb-4">
      <Badge variant="secondary" className="text-lg px-4 py-2">
        <Star className="w-4 h-4 fill-current" />
        {restaurant.rating}
      </Badge>

      <Badge variant="secondary" className="text-lg px-4 py-2">
        {restaurant.cuisine}
      </Badge>
    </div>

    <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
      {restaurant.name}
    </h1>

    <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
      <Badge variant="secondary" className="text-lg px-4 py-2 flex items-center gap-2">
        <Clock className="w-4 h-4" />
        Open Now
      </Badge>

      {restaurant.instagram && (
        <Badge
          variant="secondary"
          className="text-lg px-4 py-2 flex items-center gap-2 hover:bg-primary hover:text-white transition"
        >
          <Instagram className="w-4 h-4" />
          <a
            href={`https://instagram.com/${restaurant.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {restaurant.instagram}
          </a>
        </Badge>
      )}
    </div>
  </div>
</section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold font-montserrat mb-8"
          >
            Best Selling <span className="text-gradient">Dishes</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurant.dishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
              Ready to Dine at <span className="text-gradient">{restaurant.name}</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your table now and enjoy an unforgettable culinary experience!
            </p>
            <Link to={`/booking/${stationId}/${restaurantId}`}>
              <Button size="lg" className="gradient-primary hover:opacity-90 text-lg px-8 py-6">
                Book a Table
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default RestaurantPage;
