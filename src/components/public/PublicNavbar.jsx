import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/Logo.jpg';

const linkBase =
  'px-4 py-2 rounded-2xl text-sm font-black tracking-tight transition';
const linkIdle = 'text-white/85 hover:text-white hover:bg-white/10';
const linkActive = 'text-white bg-white/10 border border-white/20';

export default function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/tentang', label: 'Tentang' },
    { to: '/layanan', label: 'Layanan' },
    { to: '/lokasi', label: 'Lokasi' },
    { to: '/promo', label: 'Promo' },
  ];

  // close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-emerald-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-[78px] flex items-center justify-between">
              {/* BRAND */}
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3"
                aria-label="Go to homepage"
              >
                <div className="h-11 w-11 rounded-2xl overflow-hidden border border-white/10 shadow-sm">
                  <img
                    src={logo}
                    alt="Clean-Area"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
                <div className="leading-tight text-left">
                  <div className="text-white font-black tracking-tight text-lg">
                    Clean-Area
                  </div>
                  <div className="text-white/70 text-xs font-semibold">
                    Cuci Sepatu Premium
                  </div>
                </div>
              </button>

              {/* DESKTOP LINKS */}
              <nav
                className="hidden md:flex items-center gap-2"
                aria-label="Main navigation"
              >
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? linkActive : linkIdle}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>

              {/* RIGHT ACTION */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/layanan')}
                  className="hidden md:inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-2.5 text-sm font-black text-emerald-950 hover:bg-amber-300 transition shadow"
                >
                  Daftar Menu
                </button>

                <button
                  onClick={() => setOpen(true)}
                  className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 transition border border-white/10"
                  aria-label="Open menu"
                  aria-expanded={open}
                >
                  <Menu className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />
        </div>
      </header>

      {/* MOBILE MENU (TOP SHEET - DI ATAS, SETENGAH LAYAR) */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* overlay */}
          <button
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-label="Close overlay"
          />

          {/* TOP SHEET: muncul di bawah navbar */}
          <div className="absolute inset-x-0 top-[86px] px-4">
            <div className="rounded-[28px] bg-emerald-950 border border-white/10 shadow-2xl overflow-hidden">
              {/* header */}
              <div className="px-4 py-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={logo}
                      alt="Clean-Area"
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-white font-black">Menu</div>
                    <div className="text-white/70 text-xs font-semibold">
                      Pilih halaman
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="h-11 w-11 rounded-2xl bg-white/10 hover:bg-white/15 transition border border-white/10 inline-flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* content: setengah layar + scroll */}
              <div className="px-4 pb-5 max-h-[52vh] overflow-auto">
                <div className="grid gap-2 pt-4">
                  {navLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block w-full ${linkBase} ${
                          isActive ? linkActive : linkIdle
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-4 grid gap-2">
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate('/layanan');
                    }}
                    className="w-full rounded-2xl bg-amber-400 py-3 font-black text-emerald-950 hover:bg-amber-300 transition shadow"
                  >
                    Daftar Menu
                  </button>

                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate('/track'); // pastikan route kamu benar
                    }}
                    className="w-full rounded-2xl bg-white/10 py-3 font-black text-white border border-white/15 hover:bg-white/15 transition"
                  >
                    Track Order
                  </button>
                </div>

                <div className="mt-4 text-center text-xs text-white/60">
                  Tap di luar atau tekan ESC untuk menutup
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
