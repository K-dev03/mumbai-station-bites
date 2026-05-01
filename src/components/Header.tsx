import { Link } from 'react-router-dom';
import { Train, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center animate-pulse-glow">
            <Train className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-montserrat text-gradient">
              Mumbai Station Bites
            </h1>
            <p className="text-xs text-muted-foreground">Taste the journey</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Home
          </a>

          <a
            href="#stations"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Stations
          </a>

          {/* ✅ ONLY THIS ADDED */}
          <Link
            to="/my-bookings"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Your Bookings
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="gap-2">
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="gap-2 gradient-primary hover:opacity-90 transition-opacity">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;