import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">₹</span>
            </div>
            <span className="text-xl text-foreground">vinitify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/schemes"
              className="text-foreground hover:text-primary transition-colors"
            >
              Schemes
            </Link>
            <Link
              to="/finance-tips"
              className="text-foreground hover:text-primary transition-colors"
            >
              Finance Tips
            </Link>
            <Link
              to="/tools"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tools
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/schemes"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schemes
            </Link>
            <Link
              to="/finance-tips"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Finance Tips
            </Link>
            <Link
              to="/tools"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
