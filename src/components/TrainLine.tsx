import { Link } from 'react-router-dom';
import { Station } from '@/data/stationsData';
import { motion } from 'framer-motion';

interface TrainLineProps {
  stations: Station[];
  lineName: string;
  lineColor: 'FastTrack' | 'SlowTrack';
}

const TrainLine = ({ stations, lineName, lineColor }: TrainLineProps) => {
  const isFast = lineColor === 'FastTrack';
  
  return (
    <div className="w-full py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-4 h-4 rounded-full ${isFast  ? 'bg-red-500' : 'bg-blue-500'}`} />
        <h3 className="text-2xl font-bold font-montserrat text-foreground">
          {lineName}
        </h3>
        <div className={`flex-1 h-1 rounded-full ${isFast ? 'bg-red-500/30' : 'bg-blue-500/30'}`} />
      </div>

      <div className="relative">
        {/* Track line */}
        <div className={`absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full ${
          isFast ? 'bg-red-500/20' : 'bg-blue-500/20'
        }`}>
          <div className={`h-full rounded-full ${
            isFast ? 'bg-red-500' : 'bg-blue-500'
          } opacity-50`} style={{ width: '100%' }} />
        </div>

        {/* Animated train */}
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 z-10"
          initial={{ x: '-100%' }}
          animate={{ x: '100vw' }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear',
            repeatDelay: 2
          }}
        >
          <span className="text-4xl">🚃</span>
        </motion.div>

        {/* Station nodes */}
        <div className="relative overflow-x-auto">
  <div className="flex items-center gap-16 py-8 w-max px-8">
          {stations.map((station, index) => (
            <Link 
              key={station.id}
              to={`/station/${station.id}`}
              className="group flex flex-col items-center min-w-[120px]"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className={`relative w-16 h-16 rounded-2xl ${
                  isFast? 'bg-red-500' : 'bg-blue-500'
                } flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <span className="text-2xl">🚃</span>
                
                {/* Pulse effect */}
                <div className={`absolute inset-0 rounded-2xl ${
                  isFast ? 'bg-red-500' : 'bg-blue-500'
                } animate-ping opacity-20`} />
              </motion.div>

              <motion.div 
                className="mt-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {station.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {station.restaurants.length} restaurants
                </p>
              </motion.div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainLine;
