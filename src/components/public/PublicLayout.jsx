// src/components/layout/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <PublicNavbar />

      {/* karena navbar fixed (h-[78px]) */}
      <main className="pt-[78px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
