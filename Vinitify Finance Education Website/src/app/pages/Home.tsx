import { Link } from "react-router-dom";
import { Heart, GraduationCap, Banknote, TrendingUp, Users, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useState } from "react";

export function Home() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing! (Demo)");
    setEmail("");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Unlock Government Benefits & Smart Money Moves
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Daily updates on schemes, subsidies, tax-saving & finance explained in simple Hindi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/schemes">Check Latest Schemes</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Join Free WhatsApp Updates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/schemes?category=marriage">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Marriage Schemes</CardTitle>
                <CardDescription>
                  Financial support for weddings • शादी योजनाएं
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get up to ₹50,000 assistance from government schemes
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/schemes?category=education">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Education Loans</CardTitle>
                <CardDescription>
                  Student loans & scholarships • शिक्षा ऋण
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Low interest education loans and scholarship programs
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/schemes?category=pension">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Pension & Retirement</CardTitle>
                <CardDescription>
                  Senior citizen benefits • पेंशन योजना
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monthly pension schemes and retirement plans
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/tools">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tax Saving</CardTitle>
                <CardDescription>
                  Save money on taxes • टैक्स बचत
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Calculate deductions under 80C, 80D and more
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3>50,000+</h3>
              <p className="text-muted-foreground">Trusted Users</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3>1000+</h3>
              <p className="text-muted-foreground">Government Schemes</p>
            </div>
            <div>
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3>Daily</h3>
              <p className="text-muted-foreground">Fresh Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <Card className="border-2 border-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription>
              Get weekly updates on new schemes, finance tips, and exclusive content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Subscribe Free
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Join 50,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
