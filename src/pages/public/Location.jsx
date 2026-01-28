import React from 'react';
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

// === IMPORT FOTO OUTLET ===
import gallery6 from '../../assets/images/home/toko.png';

export default function Location() {
  // ✅ GANTI INI SESUAI KEBUTUHAN
  const WHATSAPP_NUMBER = '6287711428015';
  const EMAIL = 'clean.area02@gmail.com';
  const PHONE_DISPLAY = '+62 877-1142-8015';
  const ADDRESS =
    'Jl. Pulau Tegal, Way Dadi, Kec. Sukarame, Kota Bandar Lampung, Lampung 35133';

  // ✅ Link embed Google Maps (harus URL embed, bukan short link)
  const MAPS_EMBED_URL = 'https://maps.app.goo.gl/7f5n5j8r4fCExwnaA';

  // ✅ Perbaiki link WhatsApp — hapus spasi!
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Halo Clean-Area, saya mau tanya lokasi outlet dan jam operasional.'
  )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 text-center">
          <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 border border-white/10">
            <MapPin className="h-8 w-8 text-amber-300" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Lokasi <span className="text-amber-300">Clean Area</span>
          </h1>
          <p className="mt-4 text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Temukan outlet kami, cek jam operasional, dan dapatkan arah tercepat
            ke lokasi.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-7 py-3 font-black text-emerald-950 hover:bg-amber-300 transition shadow"
            >
              <PhoneCall className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
            <a
              href="#maps"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-3 font-black text-white border border-white/15 hover:bg-white/15 transition"
            >
              <Navigation className="h-5 w-5" />
              Lihat Maps
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: Outlet + Contact */}
          <div className="space-y-6">
            {/* Outlet Image — SEKARANG PAKAI GAMBAR ASLI */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={gallery6}
                  alt="Outlet Clean-Area"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-emerald-950 flex items-center justify-center">
                  <PhoneCall className="h-6 w-6 text-amber-300" />
                </div>
                <div className="mt-4 text-xs font-semibold text-slate-500">
                  Telepon
                </div>
                <div className="mt-1 font-black text-emerald-950">
                  {PHONE_DISPLAY}
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-black text-emerald-950 hover:text-emerald-900"
                >
                  Chat WhatsApp <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-emerald-950 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-amber-300" />
                </div>
                <div className="mt-4 text-xs font-semibold text-slate-500">
                  Email
                </div>
                <div className="mt-1 font-black text-emerald-950 break-all">
                  {EMAIL}
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-black text-emerald-950 hover:text-emerald-900"
                >
                  Kirim Email <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Maps + Address */}
          <div className="space-y-6">
            {/* MAPS */}
            <div
              id="maps"
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white"
            >
              <div className="p-5 sm:p-6 border-b border-slate-200">
                <h2 className="text-xl sm:text-2xl font-black text-emerald-950">
                  Google Maps
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Klik dan zoom untuk melihat detail rute ke outlet.
                </p>
              </div>

              <div className="aspect-[16/10] w-full bg-slate-100">
                {MAPS_EMBED_URL && MAPS_EMBED_URL.trim() !== '' ? (
                  <iframe
                    title="Google Maps - Clean-Area"
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-center px-6">
                    <div>
                      <MapPin className="h-10 w-10 text-emerald-700 mx-auto" />
                      <div className="mt-3 font-black text-emerald-950">
                        Tempel URL Embed Maps
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Buka Google Maps → Share → Embed a map → copy link.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Address Details */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-emerald-950">
                Alamat & Jam Operasional
              </h3>

              <div className="mt-4 space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-emerald-950 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500">
                      Alamat
                    </div>
                    <div className="font-semibold leading-relaxed">
                      {ADDRESS}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-emerald-950 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500">
                      Jam Operasional
                    </div>
                    <div className="font-semibold leading-relaxed">
                      Senin – Sabtu: 09.00 – 20.00 WIB <br />
                      Minggu: Tutup
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <MapPin className="h-6 w-6 text-amber-300" />,
              title: 'Lokasi Strategis',
              desc: 'Mudah dijangkau dan nyaman untuk drop-off/pick-up.',
            },
            {
              icon: <Clock className="h-6 w-6 text-amber-300" />,
              title: 'Jam Fleksibel',
              desc: 'Buka setiap Senin - Sabtu:09.00 - 20.00 WIB.',
            },
            {
              icon: <MessageCircle className="h-6 w-6 text-amber-300" />,
              title: 'Reservasi Mudah',
              desc: 'Chat WhatsApp untuk booking atau info layanan.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-950 flex items-center justify-center">
                {f.icon}
              </div>
              <div className="mt-4 font-black text-emerald-950">{f.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-[28px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 p-8 md:p-10 text-center text-white border border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <h2 className="text-2xl md:text-3xl font-black">
            Kunjungi Outlet Kami Sekarang
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl mx-auto leading-relaxed">
            Layanan perawatan sepatu profesional dengan standar premium. Sepatu
            bersih, rapi, dan aman untuk material.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-7 py-3 font-black text-emerald-950 hover:bg-amber-300 transition shadow"
            >
              <PhoneCall className="h-5 w-5" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}