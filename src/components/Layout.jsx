import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function toggleMobileMenu() {
    setMobileMenuOpen((open) => !open);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <TopBar mobileOpen={mobileMenuOpen} onMenuToggle={toggleMobileMenu} />
      <NavBar mobileOpen={mobileMenuOpen} onClose={closeMobileMenu} />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
