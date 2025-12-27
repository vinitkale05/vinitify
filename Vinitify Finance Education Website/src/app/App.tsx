import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Schemes } from "./pages/Schemes";
import { FinanceTips } from "./pages/FinanceTips";
import { Tools } from "./pages/Tools";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/finance-tips" element={<FinanceTips />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
