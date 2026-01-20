import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Train } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <section className="relative h-[50vh] min-h-[400px] pt-20">
        <div className="absolute inset-0">
          <img 
            src={station.image} 
            alt={station.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-cream/80 hover:text-cream mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to all stations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                station.line === 'western' ? 'bg-primary' : 'bg-destructive'
              }`}>
                <Train className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                station.line === 'western' 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-destructive/20 text-destructive'
              }`}>
                {station.line === 'western' ? 'Western Line' : 'Central Line'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-cream mb-4">
              {station.name} Station
            </h1>

            <div className="flex items-center gap-4 text-cream/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{station.restaurants.length} restaurants nearby</span>
              </div>
            </div>
          </motion.div>
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

      <Footer />
    </div>
  );
};

export default StationPage;
