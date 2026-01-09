import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import RequireAdmin from "./components/admin/RequireAdmin";
import AdminServices from "./pages/admin/Services";
import AdminLayout from "./components/admin/AdminLayout"; // <--- Import ini
import AdminOrders from "./pages/admin/Orders";
import AdminOrderDetail from "./pages/admin/OrderDetail";
import AdminOrderCreate from "./pages/admin/AdminOrderCreate";
import Tracking from "./pages/public/Tracking";
import Profile from "./pages/admin/Profile";

import PublicLayout from "./components/public/PublicLayout";
import Home from "./pages/public/Home";
import About from "./pages/public/About";

import ServicesPublic from "./pages/public/Services";
import Location from "./pages/public/Location";
import Promo from "./pages/public/Promo";
import NotFound from "./components/public/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ADMIN LOGIN (Tanpa Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route element={<RequireAdmin />}>
          {/* Bungkus semua halaman admin dengan AdminLayout */}
          <Route element={<AdminLayout />}> 
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetail />} />
            <Route path="/admin/orders/create" element={<AdminOrderCreate />} />
            <Route path="/admin/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<ServicesPublic />} />
          <Route path="/lokasi" element={<Location />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/tracking" element={<Tracking />} />
        </Route>


        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}