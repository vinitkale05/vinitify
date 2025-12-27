import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Clock, BookOpen } from "lucide-react";
import { useState } from "react";

const tips = [
  {
    id: 1,
    title: "5 Tax-Saving Tips for Salaried Employees",
    category: "Tax",
    excerpt: "Learn how to save taxes under Section 80C, 80D and other deductions",
    readTime: "5 min read",
    date: "Dec 25, 2024",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "How to Start SIP with Just ₹500",
    category: "Investment",
    excerpt: "Systematic Investment Plan guide for beginners • म्यूचुअल फंड में निवेश",
    readTime: "7 min read",
    date: "Dec 24, 2024",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Emergency Fund: Why You Need It",
    category: "Saving",
    excerpt: "Build a safety net for unexpected expenses • आपातकालीन निधि",
    readTime: "4 min read",
    date: "Dec 23, 2024",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Term Insurance vs Endowment Plans",
    category: "Insurance",
    excerpt: "Understanding the difference and choosing the right one",
    readTime: "6 min read",
    date: "Dec 22, 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "PPF vs Sukanya Samriddhi Yojana",
    category: "Saving",
    excerpt: "Which is better for your child's future? • बच्चों की शिक्षा के लिए बचत",
    readTime: "5 min read",
    date: "Dec 21, 2024",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "How to Check Your Credit Score for Free",
    category: "Saving",
    excerpt: "Monitor your CIBIL score and improve it • क्रेडिट स्कोर कैसे चेक करें",
    readTime: "4 min read",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
  },
];

export function FinanceTips() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTips =
    selectedCategory === "All"
      ? tips
      : tips.filter((tip) => tip.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4">Finance Tips & Guides</h1>
        <p className="text-muted-foreground">
          Learn about personal finance, investments, and money management • वित्तीय सलाह
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start flex-wrap h-auto">
            <TabsTrigger value="All">All Articles</TabsTrigger>
            <TabsTrigger value="Saving">Saving</TabsTrigger>
            <TabsTrigger value="Investment">Investment</TabsTrigger>
            <TabsTrigger value="Tax">Tax</TabsTrigger>
            <TabsTrigger value="Insurance">Insurance</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip) => (
          <Card key={tip.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{tip.category}</Badge>
                <span className="text-xs text-muted-foreground">{tip.date}</span>
              </div>
              <CardTitle className="text-xl line-clamp-2">{tip.title}</CardTitle>
              <CardDescription className="line-clamp-2">{tip.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{tip.readTime}</span>
                </div>
                <Button variant="link" className="p-0">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Section */}
      <section className="mt-16">
        <h2 className="mb-6">Video Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Video Tutorial</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  {i === 1 && "How to Calculate SIP Returns"}
                  {i === 2 && "Tax Saving Strategies 2024"}
                  {i === 3 && "Build Emergency Fund"}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
