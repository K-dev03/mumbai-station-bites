import { Flame } from 'lucide-react';
import { Dish } from '@/data/stationsData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface DishCardProps {
  dish: Dish;
  index?: number;
}

const DishCard = ({ dish, index = 0 }: DishCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={dish.image} 
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {dish.isPopular && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-destructive text-destructive-foreground gap-1">
                <Flame className="w-3 h-3" />
                Popular
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {dish.name}
          </h4>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">₹{dish.price}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DishCard;
