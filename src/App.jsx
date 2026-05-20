import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import VolunteerPage from "./pages/VolunteerPage";
import PartnerPage from "./pages/PartnerPage";
import RegisterPage from "./pages/RegisterPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import VotersCardPage from "./pages/VotersCardPage";
import ElectoralProcessPage from "./pages/ElectoralProcessPage";
import BlogArticlePage from "./pages/BlogArticlePage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/get-involved/volunteer" element={<VolunteerPage />} />
          <Route path="/get-involved/partner" element={<PartnerPage />} />
          <Route path="/voting/voters-card" element={<VotersCardPage />} />
          <Route path="/voting/electoral-process" element={<ElectoralProcessPage />} />
          <Route path="/article" element={<Navigate to="/blog/how-to-obtain-voters-card" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
