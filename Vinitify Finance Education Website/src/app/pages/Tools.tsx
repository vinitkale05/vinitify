import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calculator, TrendingUp, FileCheck } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";

export function Tools() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [loanTenure, setLoanTenure] = useState("120");
  const [emi, setEmi] = useState<number | null>(null);

  // SIP Calculator State
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
  const [expectedReturn, setExpectedReturn] = useState("12");
  const [investmentPeriod, setInvestmentPeriod] = useState("120");
  const [sipResult, setSipResult] = useState<{ total: number; invested: number; gains: number } | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(loanTenure);

    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiValue));
  };

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 12 / 100;
    const n = parseFloat(investmentPeriod);

    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P * n;
    const gains = futureValue - invested;

    setSipResult({
      total: Math.round(futureValue),
      invested: Math.round(invested),
      gains: Math.round(gains),
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4">Financial Calculators & Tools</h1>
        <p className="text-muted-foreground">
          Plan your finances with our free calculators • वित्तीय कैलकुलेटर
        </p>
      </div>

      <Tabs defaultValue="emi" className="space-y-8">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="emi">EMI Calculator</TabsTrigger>
          <TabsTrigger value="sip">SIP Calculator</TabsTrigger>
          <TabsTrigger value="tax">Tax Checklist</TabsTrigger>
        </TabsList>

        {/* EMI Calculator */}
        <TabsContent value="emi">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>EMI Calculator</CardTitle>
                <CardDescription>
                  Calculate your monthly loan payments • ईएमआई कैलकुलेटर
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest-rate">Interest Rate (% per annum)</Label>
                  <Input
                    id="interest-rate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-tenure">Loan Tenure (months)</Label>
                  <Input
                    id="loan-tenure"
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                  />
                </div>
                <Button onClick={calculateEMI} className="w-full">
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Your Monthly EMI</CardTitle>
              </CardHeader>
              <CardContent>
                {emi !== null ? (
                  <div className="space-y-4">
                    <div className="text-4xl font-bold">₹{emi.toLocaleString("en-IN")}</div>
                    <div className="space-y-2 text-sm opacity-90">
                      <div className="flex justify-between">
                        <span>Principal Amount:</span>
                        <span>₹{parseFloat(loanAmount).toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Interest:</span>
                        <span>
                          ₹{(emi * parseFloat(loanTenure) - parseFloat(loanAmount)).toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Amount:</span>
                        <span>₹{(emi * parseFloat(loanTenure)).toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-center opacity-75">Click calculate to see results</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SIP Calculator */}
        <TabsContent value="sip">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>SIP Calculator</CardTitle>
                <CardDescription>
                  Calculate your mutual fund returns • एसआईपी कैलकुलेटर
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="monthly-investment">Monthly Investment (₹)</Label>
                  <Input
                    id="monthly-investment"
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expected-return">Expected Return (% per annum)</Label>
                  <Input
                    id="expected-return"
                    type="number"
                    step="0.1"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="investment-period">Investment Period (months)</Label>
                  <Input
                    id="investment-period"
                    type="number"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                  />
                </div>
                <Button onClick={calculateSIP} className="w-full bg-accent hover:bg-accent/90">
                  Calculate Returns
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle>Estimated Returns</CardTitle>
              </CardHeader>
              <CardContent>
                {sipResult !== null ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Total Value</p>
                      <div className="text-4xl font-bold">₹{sipResult.total.toLocaleString("en-IN")}</div>
                    </div>
                    <div className="space-y-2 text-sm opacity-90">
                      <div className="flex justify-between">
                        <span>Amount Invested:</span>
                        <span>₹{sipResult.invested.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimated Gains:</span>
                        <span>₹{sipResult.gains.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-center opacity-75">Click calculate to see results</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tax Saving Checklist */}
        <TabsContent value="tax">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Tax Saving Checklist</CardTitle>
              <CardDescription>
                Common deductions under Income Tax Act • टैक्स बचत चेकलिस्ट
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3">Section 80C (up to ₹1.5 lakh)</h4>
                  <div className="space-y-2">
                    {[
                      "PPF (Public Provident Fund)",
                      "ELSS Mutual Funds",
                      "Life Insurance Premium",
                      "NSC (National Savings Certificate)",
                      "Home Loan Principal Repayment",
                      "Tuition Fees (2 children)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`80c-${i}`} />
                        <label htmlFor={`80c-${i}`} className="text-sm cursor-pointer">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3">Section 80D (Medical Insurance)</h4>
                  <div className="space-y-2">
                    {[
                      "Health Insurance Premium - Self & Family (₹25,000)",
                      "Health Insurance Premium - Parents (₹25,000)",
                      "Senior Citizen Parent Premium (₹50,000)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`80d-${i}`} />
                        <label htmlFor={`80d-${i}`} className="text-sm cursor-pointer">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3">Other Deductions</h4>
                  <div className="space-y-2">
                    {[
                      "Section 80E - Education Loan Interest",
                      "Section 24 - Home Loan Interest (₹2 lakh)",
                      "Section 80G - Charitable Donations",
                      "HRA (House Rent Allowance)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox id={`other-${i}`} />
                        <label htmlFor={`other-${i}`} className="text-sm cursor-pointer">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
