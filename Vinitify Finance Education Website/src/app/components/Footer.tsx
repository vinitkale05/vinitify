import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground">₹</span>
              </div>
              <span className="text-xl">vinitify</span>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner for government schemes, subsidies, and financial guidance
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/schemes" className="block text-sm opacity-80 hover:opacity-100">
                Browse Schemes
              </Link>
              <Link to="/finance-tips" className="block text-sm opacity-80 hover:opacity-100">
                Finance Tips
              </Link>
              <Link to="/tools" className="block text-sm opacity-80 hover:opacity-100">
                Calculators
              </Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100">
                About Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm opacity-80 hover:opacity-100">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm opacity-80 hover:opacity-100">
                Terms of Service
              </a>
              <a href="#" className="block text-sm opacity-80 hover:opacity-100">
                Disclaimer
              </a>
              <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>© 2025 vinitify. All rights reserved. This platform is for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
