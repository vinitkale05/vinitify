import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon. (Demo)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions? We're here to help • हम आपकी मदद के लिए यहाँ हैं
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">support@vinitify.com</p>
                  <p className="text-sm text-muted-foreground">info@vinitify.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1">WhatsApp Community</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Join our WhatsApp group for daily updates
                  </p>
                  <Button variant="outline" size="sm">
                    Join Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    Helpline: 1800-XXX-XXXX (Mon-Fri, 9 AM - 6 PM)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1">Office</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Finance Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is vinitify free to use?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Yes, all our content, tools, and resources are completely free. We don't charge
                for any information or services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I apply for schemes?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We provide information about schemes, but applications must be submitted through
                official government portals. We include links to official websites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is my data safe?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                vinitify does not collect or store personal information. We only collect email
                addresses for newsletter subscriptions, which you can unsubscribe from anytime.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I suggest a scheme to add?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Absolutely! We welcome suggestions. Please contact us with details about the
                scheme and we'll review and add it to our database.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
