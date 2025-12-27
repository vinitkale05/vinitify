import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ExternalLink, IndianRupee } from "lucide-react";

const schemes = [
  {
    id: 1,
    name: "PM Kisan Samman Nidhi",
    category: "Central",
    targetGroup: "Farmers",
    benefit: "₹6,000/year",
    eligibility: "Small and marginal farmers with landholding up to 2 hectares",
    description: "Direct income support to farmer families • किसानों के लिए प्रत्यक्ष आय सहायता",
  },
  {
    id: 2,
    name: "Pradhan Mantri Awas Yojana",
    category: "Central",
    targetGroup: "General",
    benefit: "Up to ₹2.5 lakh subsidy",
    eligibility: "Economically weaker sections, lower income groups",
    description: "Housing for all by 2022 • सभी के लिए आवास",
  },
  {
    id: 3,
    name: "Sukanya Samriddhi Yojana",
    category: "Central",
    targetGroup: "Women",
    benefit: "8.2% interest rate",
    eligibility: "Girl child below 10 years",
    description: "Save for your daughter's future • बेटी बचाओ बेटी पढ़ाओ",
  },
  {
    id: 4,
    name: "PM Scholarship Scheme",
    category: "Central",
    targetGroup: "Students",
    benefit: "₹3,000/month",
    eligibility: "Children of ex-servicemen, police personnel",
    description: "Educational support for meritorious students • छात्रवृत्ति योजना",
  },
  {
    id: 5,
    name: "Atal Pension Yojana",
    category: "Central",
    targetGroup: "Senior Citizens",
    benefit: "₹1,000-5,000/month",
    eligibility: "Indian citizens aged 18-40 years",
    description: "Guaranteed pension after 60 years • पेंशन योजना",
  },
  {
    id: 6,
    name: "PM Mudra Yojana",
    category: "Central",
    targetGroup: "General",
    benefit: "Loan up to ₹10 lakh",
    eligibility: "Small business owners, entrepreneurs",
    description: "Micro units development loans • व्यवसाय ऋण योजना",
  },
  {
    id: 7,
    name: "Widow Pension Scheme",
    category: "State",
    targetGroup: "Women",
    benefit: "₹500-1,000/month",
    eligibility: "Widows below poverty line",
    description: "Monthly pension for widows • विधवा पेंशन",
  },
  {
    id: 8,
    name: "National Scholarship Portal",
    category: "Central",
    targetGroup: "Students",
    benefit: "Various amounts",
    eligibility: "Students from SC/ST/OBC/Minority communities",
    description: "Scholarships for deserving students • छात्रवृत्ति पोर्टल",
  },
];

export function Schemes() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSchemes =
    selectedCategory === "All"
      ? schemes
      : schemes.filter(
          (scheme) =>
            scheme.category === selectedCategory ||
            scheme.targetGroup === selectedCategory
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4">Government Schemes & Subsidies</h1>
        <p className="text-muted-foreground">
          Browse through various central and state government schemes • सरकारी योजनाएं
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start flex-wrap h-auto">
            <TabsTrigger value="All">All Schemes</TabsTrigger>
            <TabsTrigger value="Central">Central</TabsTrigger>
            <TabsTrigger value="State">State</TabsTrigger>
            <TabsTrigger value="Women">Women</TabsTrigger>
            <TabsTrigger value="Students">Students</TabsTrigger>
            <TabsTrigger value="Senior Citizens">Senior Citizens</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{scheme.category}</Badge>
                <Badge variant="outline">{scheme.targetGroup}</Badge>
              </div>
              <CardTitle className="text-xl">{scheme.name}</CardTitle>
              <CardDescription>{scheme.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <IndianRupee className="w-5 h-5" />
                <span className="font-medium">{scheme.benefit}</span>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Eligibility:</p>
                <p className="text-sm text-muted-foreground">
                  {scheme.eligibility}
                </p>
              </div>
              <Button className="w-full" variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No schemes found for the selected category
          </p>
        </div>
      )}
    </div>
  );
}
