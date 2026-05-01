import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Train } from 'lucide-react';
import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import { getStationById } from '@/data/stationsData';
import { Button } from '@/components/ui/button';

const StationPage = () => {
  const { stationId } = useParams<{ stationId: string }>();
  const station = getStationById(stationId || '');

  if (!station) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Station not found</h1>
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
  {/* Image Only */}
  <div className="relative h-[50vh] min-h-[350px]">
    <img
      src={station.image}
      alt={station.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Below Image */}
  <div className="container mx-auto px-4 py-8">
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to all stations
    </Link>

    <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
      {station.name} 
    </h1>

    <div className="flex items-center gap-4 text-muted-foreground">
      <MapPin className="w-5 h-5" />
      <span>{station.restaurants.length} Restaurants</span>
    </div>
  </div>
</section>


      {/* Restaurants Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold font-montserrat mb-8"
          >
            Famous Eats Near <span className="text-gradient">{station.name}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {station.restaurants.map((restaurant, index) => (
              <RestaurantCard 
                key={restaurant.id}
                restaurant={restaurant}
                stationId={station.id}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default StationPage;
