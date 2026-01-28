import { MapPin, Phone, Mail, Instagram, Music } from 'lucide-react';
import logo from '../../assets/images/Logo-1.jpg';

export default function Footer() {
  const socialIcons = (
    <>
      <a
        href="https://instagram.com/clean.area"
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105"
        aria-label="Instagram"
      >
        <Instagram size={18} />
      </a>

      <a
        href="https://tiktok.com/@clean.area"
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105"
        aria-label="TikTok"
      >
        <Music size={18} />
      </a>

      <a
        href="https://wa.me/6287711428015"
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-105"
        aria-label="WhatsApp"
      >
        <Phone size={18} />
      </a>
    </>
  );

  return (
    <footer className="bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* ===================== MOBILE ( < md ) ===================== */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* BRAND + DESC */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Clean-Area Logo"
                className="w-12 h-12 object-contain rounded-xl bg-white p-2 shadow-xl shadow-amber-400/20 hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-sm text-white/75 leading-relaxed max-w-md">
                Jasa perawatan sepatu premium dengan layanan cleaning, repair,
                repaint, custom, dan paket usaha. Pantau progres sepatu Anda
                secara real-time.
              </p>
            </div>
          </div>

          {/* MENU CEPAT */}
          <div className="text-center">
            <h4 className="font-bold text-white text-lg mb-3">Menu Cepat</h4>
            <ul className="space-y-2 text-sm text-white/75">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang Kami', href: '/tentang' },
                { label: 'Layanan', href: '/layanan' },
                { label: 'Lokasi Kami', href: '/lokasi' },
                { label: 'Track Order', href: '/queue' },
                { label: 'Promo', href: '/promo' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOKASI */}
          <div className="text-left">
            <h4 className="font-bold text-white text-lg mb-3">Lokasi Kami</h4>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90">Bandar Lampung</p>
                  <p className="mt-1 leading-relaxed">
                    Jl. Pulau Tegal, Way Dadi, Kec. Sukarame, Kota Bandar
                    Lampung, Lampung 35133
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HUBUNGI */}
          <div className="text-left">
            <h4 className="font-bold text-white text-lg mb-3">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90">WhatsApp</p>
                  <a
                    href="https://wa.me/6287711428015"
                    className="hover:text-amber-400 transition"
                  >
                    +62 877-1142-8015
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90">Email</p>
                  <a
                    href="clean.area02@gmail.com"
                    className="hover:text-amber-400 transition"
                  >
                    clean.area02@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/6287711428015"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-black hover:bg-amber-500 transition-all shadow-md hover:shadow-amber-400/50"
                >
                  <Phone size={16} />
                  Chat Sekarang
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px bg-white/10 my-2" />

          {/* IKUTI KAMI (MOBILE) */}
          <div className="text-center">
            <p className="text-sm font-semibold text-white/90 mb-3">
              Ikuti Kami
            </p>
            <div className="flex justify-center gap-3">{socialIcons}</div>
          </div>
        </div>

        {/* ===================== TABLET + DESKTOP ( >= md ) ===================== */}
        <div className="hidden md:grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* BRAND */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-3 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Clean-Area Logo"
                  className="w-12 h-12 object-contain rounded-xl bg-white p-2 shadow-xl shadow-amber-400/20 hover:scale-105 transition-transform"
                />
                {/* HAPUS di TABLET, MUNCUL di DESKTOP */}
                <h3 className="hidden lg:block text-2xl font-black tracking-tight">
                  Clean<span className="text-amber-400">-</span>Area
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-xs mx-auto lg:mx-0">
              Jasa perawatan sepatu premium dengan layanan cleaning, repair,
              repaint, custom, dan paket usaha. Pantau progres sepatu Anda
              secara real-time.
            </p>

            {/* IKUTI KAMI hanya DESKTOP (lg) */}
            <div className="hidden lg:block mt-6">
              <p className="text-sm font-semibold text-white/90 mb-3">
                Ikuti Kami
              </p>
              <div className="flex gap-3">{socialIcons}</div>
            </div>
          </div>

          {/* QUICK LINKS (GESER KANAN DI TABLET) */}
          <div className="md:pl-20 lg:pl-5">
            <h4 className="font-bold text-white text-lg mb-4">Menu Cepat</h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang Kami', href: '/tentang' },
                { label: 'Layanan', href: '/layanan' },
                { label: 'Lokasi Kami', href: '/lokasi' },
                { label: 'Track Order', href: '/queue' },
                { label: 'Promo', href: '/promo' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOKASI (GESER KANAN DI TABLET) */}
          <div className="md:pl-6 lg:pl-0">
            <h4 className="font-bold text-white text-lg mb-4mention">
              Lokasi Kami
            </h4>
            <div className="space-y-4 text-sm text-white/75">
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90">Bandar Lampung</p>
                  <p className="mt-1 leading-relaxed">
                    Jl. Pulau Tegal, Way Dadi, Kec. Sukarame, Kota Bandar
                    Lampung, Lampung 35133
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT (GESER KANAN DI TABLET) */}
          <div className="md:pl-18 lg:pl-0">
            <h4 className="font-bold text-white text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-4 text-sm text-white/75">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90">WhatsApp</p>
                  <a
                    href="https://wa.me/6287711428015"
                    className="hover:text-amber-400 transition"
                  >
                    +62 877-1142-8015
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90">Email</p>
                  <a
                    href="clean.area02@gmail.com"
                    className="hover:text-amber-400 transition"
                  >
                    clean.area02@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/6287711428015"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-black hover:bg-amber-500 transition-all shadow-md hover:shadow-amber-400/50"
                >
                  <Phone size={16} />
                  Chat Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* IKUTI KAMI — TABLET ONLY (md), DIPINDAH KE BAWAH */}
        <div className="hidden md:block lg:hidden mt-10">
          <div className="h-px bg-white/10 mb-8" />
          <div className="text-center">
            <p className="text-sm font-semibold text-white/90 mb-3">
              Ikuti Kami
            </p>
            <div className="flex justify-center gap-3">{socialIcons}</div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className=" md:pl-9mt-10 flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Clean-Area"
              className="w-5 h-5 object-contain opacity-70"
            />
            <p>
              © {new Date().getFullYear()} Clean Area. Semua hak dilindungi.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-center lg:hidden">
            <a href="/privacy" className="hover:text-amber-400 transition">
              Kebijakan Privasi
            </a>
            <span className="text-white/30">•</span>
            <a href="/terms" className="hover:text-amber-400 transition">
              Syarat & Ketentuan
            </a>
            <span className="text-white/30">•</span>
            <p>Tracking antrian & status pengerjaan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
