import { Card, CardContent } from "../components/ui/card";
import { Target, Heart, Shield, Users } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4">About vinitify</h1>
        <p className="text-xl text-muted-foreground">
          Empowering Indians with Financial Knowledge & Government Schemes
        </p>
      </div>

      {/* Mission */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                vinitify was created with a simple mission: to make government schemes and financial
                information accessible to every Indian in their own language. We believe that
                financial literacy and awareness of government benefits should not be limited by
                language or complexity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What We Do */}
      <div className="mb-12">
        <h2 className="mb-6 text-center">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h4 className="mb-2">Government Schemes</h4>
              <p className="text-sm text-muted-foreground">
                We curate and explain government schemes in simple Hindi-English (Hinglish),
                making it easy for everyone to understand eligibility and application process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2">Financial Education</h4>
              <p className="text-sm text-muted-foreground">
                From tax-saving to investment basics, we provide practical financial tips that
                help Indian families make better money decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="mb-2">Community Support</h4>
              <p className="text-sm text-muted-foreground">
                Join our WhatsApp community to get daily updates, ask questions, and connect
                with others on their financial journey.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2">Free Tools</h4>
              <p className="text-sm text-muted-foreground">
                Access free calculators for EMI, SIP, and tax planning to make informed
                financial decisions for your family.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Values */}
      <Card className="bg-muted">
        <CardContent className="pt-6">
          <h3 className="mb-4 text-center">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="mb-2">Simplicity</h4>
              <p className="text-sm text-muted-foreground">
                Complex information explained in simple language
              </p>
            </div>
            <div className="text-center">
              <h4 className="mb-2">Trust</h4>
              <p className="text-sm text-muted-foreground">
                Verified information from official sources only
              </p>
            </div>
            <div className="text-center">
              <h4 className="mb-2">Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                Free for everyone, always
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="mb-2">Important Disclaimer</h4>
        <p className="text-sm text-muted-foreground">
          vinitify is an informational platform. We do not collect or store personal information
          (PII). Always verify scheme details from official government websites before applying.
          We are not responsible for any decisions made based on information provided on this
          platform.
        </p>
      </div>
    </div>
  );
}
