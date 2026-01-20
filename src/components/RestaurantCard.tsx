import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Restaurant } from '@/data/stationsData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface RestaurantCardProps {
  restaurant: Restaurant;
  stationId: string;
  index?: number;
}

const RestaurantCard = ({ restaurant, stationId, index = 0 }: RestaurantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 bg-card">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          
          <div className="absolute top-3 right-3">
            <Badge className="bg-gold text-charcoal font-semibold gap-1">
              <Star className="w-3 h-3 fill-current" />
              {restaurant.rating}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <Badge variant="secondary" className="bg-card/90 text-foreground">
              {restaurant.cuisine}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold font-montserrat text-foreground group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <span className="text-primary font-semibold">{restaurant.priceRange}</span>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {restaurant.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <MapPin className="w-3 h-3" />
              <span>{restaurant.dishes.length} dishes</span>
            </div>

            <Link to={`/station/${stationId}/restaurant/${restaurant.id}`}>
              <Button size="sm" className="gradient-primary hover:opacity-90">
                View Menu
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RestaurantCard;
