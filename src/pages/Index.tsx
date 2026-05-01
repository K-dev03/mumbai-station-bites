import { motion } from 'framer-motion';
import { ChevronDown, Utensils, MapPin, Star } from 'lucide-react';
import Header from '@/components/Header';

import TrainLine from '@/components/TrainLine';
import { FastTrackLineStations, SlowTrackLineStations, stations } from '@/data/stationsData';

const Index = () => {
  const totalRestaurants = stations.reduce((acc, s) => acc + s.restaurants.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      {/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-20"
>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-6">
              <span className="text-gradient">Cravingsthan</span>
              <br />
              <span className="text-foreground">Crave it. Find it. Love it.</span>
            </h1>
           

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <motion.div 
                className="flex items-center gap-2 bg-card/80 backdrop-blur px-6 py-3 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold">{stations.length} Stations</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-card/80 backdrop-blur px-6 py-3 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Utensils className="w-5 h-5 text-primary" />
                <span className="font-semibold">{totalRestaurants}+ Restaurants</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-card/80 backdrop-blur px-6 py-3 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-5 h-5 text-gold" />
                <span className="font-semibold">Top Rated</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
      </section>

      {/* Train Navigation Section */}
      
<section id="stations" className="py-20 bg-background">

  <div className="mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Choose Your <span className="text-gradient">Station</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Navigate through Mumbai's iconic railway lines and discover culinary gems at each stop
            </p>
          </motion.div>

          {/* Western Line */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TrainLine 
              stations={FastTrackLineStations} 
              lineName="🚆 FastTrack Line" 
              lineColor="FastTrack"
            />
          </motion.div>

          {/* Central Line */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TrainLine 
              stations={SlowTrackLineStations} 
              lineName="🚆 SlowTrack Line" 
              lineColor= "SlowTrack"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Why <span className="text-gradient">Cravingsthan</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🗺️', title: 'Easy Navigation', desc: 'Find best food spots by your nearest station' },
              { icon: '⭐', title: 'Curated Reviews', desc: 'Honest ratings from local foodies' },
              { icon: '📅', title: 'Quick Booking', desc: 'Reserve your table in seconds' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Index;
