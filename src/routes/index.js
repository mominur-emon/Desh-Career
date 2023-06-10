import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "../layout/NavbarComp";
import HomePage from "../components/HomePage";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsCondition from "../components/TermsCondition";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Advertise from "../components/Advertise";

const Index = () => {
  return (
    <Router>
      <NavbarComp />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/advertise" element={<Advertise />} />
      </Routes>
    </Router>
  );
};

export default Index;
