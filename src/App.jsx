import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import PromotionsPage from "./pages/PromotionsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main id="main-content" className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
