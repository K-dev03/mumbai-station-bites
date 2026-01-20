import { Train, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Train className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-montserrat">Mumbai Station Bites</h3>
            </div>
            <p className="text-cream/70 max-w-md">
              Discover the authentic taste of Mumbai at every station. From street food gems to iconic restaurants, 
              explore the culinary journey along Mumbai's lifeline - the local trains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-cream/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/stations" className="hover:text-primary transition-colors">All Stations</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Login</Link></li>
              <li><Link to="/signup" className="hover:text-primary transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center text-cream/50 text-sm">
          <p>© 2026 Mumbai Station Bites. Made with ❤️ for Mumbai foodies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
