'use client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { BadgeCheck, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';

// === GAMBAR TIMELINE ===
import img2020 from '../../assets/images/home/img2020.png';
import img2022 from '../../assets/images/home/img2022.png';
import img2024 from '../../assets/images/home/img2024.png';
import img2026 from '../../assets/images/home/img2026.png';
import toko from '../../assets/images/home/toko.png';

// === GAMBAR GALLERY (GANTI PATH SESUAI FOLDER KAMU) ===
import gallery1 from '../../assets/images/home/gallery1.png';
import gallery2 from '../../assets/images/home/gallery2.png';
import gallery3 from '../../assets/images/home/gallery3.png';
import gallery4 from '../../assets/images/home/gallery4.png';
import gallery5 from '../../assets/images/home/gallery5.png';
import gallery6 from '../../assets/images/home/gallery6.png';

export default function About() {
  const navigate = useNavigate();
  const [hoveredGallery, setHoveredGallery] = useState(null);

  const stats = [
    { value: '6+', label: 'Tahun Melayani' },
    { value: '10K+', label: 'Sepatu Terawat' },
    { value: '5K+', label: 'Pelanggan Puas' },
    { value: 'Rp25K', label: 'Harga Mulai' },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Lahirnya Clean Area',
      desc: 'Dimulai dari passion sepatu bersih dan rapi, fokus pada hasil yang aman untuk material.',
      img: img2020,
    },
    {
      year: '2022',
      title: 'Ekspansi Layanan',
      desc: 'Menambah layanan deep cleaning & treatment agar sepatu lebih awet dan nyaman dipakai.',
      img: img2022,
    },
    {
      year: '2024',
      title: 'Mencapai 10 kSepatu',
      desc: 'Milestone besar: ribuan sepatu sudah ditangani dengan SOP yang konsisten.',
      img: img2024,
    },
    {
      year: '2026',
      title: '10K+ Milestone',
      desc: 'Dipercaya ribuan pelanggan, proses makin rapi dan tracking makin transparan.',
      img: img2026,
    },
  ];

  const values = [
    {
      icon: BadgeCheck,
      title: 'Kualitas Premium',
      desc: 'Bahan dan teknik terbaik untuk hasil maksimal.',
    },
    {
      icon: HeartHandshake,
      title: 'Perhatian Detail',
      desc: 'Setiap sepatu ditangani cermat dan penuh perhatian.',
    },
    {
      icon: Zap,
      title: 'Transparan',
      desc: 'Proses kerja terbuka, jelas, dan dapat dipercaya.',
    },
    {
      icon: ShieldCheck,
      title: 'Terpercaya',
      desc: 'Dipercaya pelanggan sejak 2019.',
    },
  ];

  const testimonials = [
    {
      text: 'Hasilnya rapi banget, sepatu putih balik kinclong. Admin responsif dan progres jelas.',
      name: 'Raka Pratama',
      role: 'Mahasiswa',
      city: 'Lampung',
      avatar: '',
    },
    {
      text: 'Repaint-nya halus, warnanya rata. Terasa premium, recommended!',
      name: 'Nadia Putri',
      role: 'Karyawan',
      city: 'Jakarta',
      avatar: '',
    },
    {
      text: 'Repair sol kuat dan jahitan rapi. Sepatuku layak pakai lagi tanpa takut copot.',
      name: 'Dimas Saputra',
      role: 'Freelancer',
      city: 'Bandung',
      avatar: '',
    },
    {
      text: 'Custom detailnya cakep. Enak konsultasi, hasil akhir sesuai request.',
      name: 'Sarah Aulia',
      role: 'Content Creator',
      city: 'Jogja',
      avatar: '',
    },
    {
      text: 'Deep cleaning aman banget, sepatu suede tetap halus. Mantap!',
      name: 'Fajar Rizky',
      role: 'Mahasiswa',
      city: 'Bogor',
      avatar: '',
    },
    {
      text: 'Pelayanannya cepat, hasilnya bersih. Tracking order bikin tenang.',
      name: 'Intan Sari',
      role: 'Karyawan',
      city: 'Depok',
      avatar: '',
    },
    {
      text: 'Sepatu kerja jadi seperti baru lagi. Detail cleaning-nya keliatan.',
      name: 'Aditya Putra',
      role: 'Karyawan',
      city: 'Bekasi',
      avatar: '',
    },
    {
      text: 'Admin ramah, proses jelas, hasil rapi. Fix langganan!',
      name: 'Maya Lestari',
      role: 'Wirausaha',
      city: 'Tangerang',
      avatar: '',
    },
  ];

  function Avatar({ name, src }) {
    const initial = (name || '?').trim().slice(0, 1).toUpperCase();
    return (
      <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white bg-emerald-100 flex items-center justify-center shadow-sm">
        {src ? (
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <span className="text-emerald-800 font-bold">{initial}</span>
        )}
      </div>
    );
  }

  // === GANTI DI SINI JIKA MAU TAMBAH/UBAH GALLERY ===
  const gallery = [
    { id: 1, title: 'Cleaning Process', img: gallery1 },
    { id: 2, title: 'Premium Care', img: gallery2 },
    { id: 3, title: 'Expert Handling', img: gallery3 },
    { id: 4, title: 'Final Result', img: gallery4 },
    { id: 5, title: 'Before & After', img: gallery5 },
    { id: 6, title: 'Customer Happy', img: gallery6 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Tentang <span className="text-amber-300">Clean Area</span>
            </h1>
            <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed">
              Kami adalah jasa cuci sepatu premium yang fokus pada hasil rapi,
              aman untuk material, dan proses yang transparan sejak 2020.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  window.open('https://wa.me/6287711428015', '_blank')
                }
                className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-emerald-950 hover:bg-amber-300 transition inline-flex items-center gap-2"
              >
                Pesan Sekarang <ChevronRight size={18} />
              </button>

              <button
                onClick={() => navigate('/layanan')}
                className="rounded-2xl bg-white/10 px-6 py-3 font-black text-white border border-white/15 hover:bg-white/15 transition"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-emerald-900">
        <div className="max-w-6xl mx-auto px-6 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-black mb-2 text-amber-300">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-14 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-900 mb-6">
              Cerita Kami
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Clean-Area dimulai dari passion sederhana: membuat sepatu kembali
              terlihat dan terasa seperti baru. Dengan SOP yang rapi dan tim
              yang teliti, kami menjaga kualitas hasil untuk berbagai material.
            </p>

            <div className="mt-8 grid gap-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-emerald-900">Visi</h3>
                <p className="mt-2 text-slate-600">
                  Menjadi jasa perawatan sepatu paling dipercaya dengan standar
                  kualitas premium.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-emerald-900">Misi</h3>
                <p className="mt-2 text-slate-600">
                  Memberikan layanan yang aman untuk material, rapi, cepat, dan
                  transparan melalui tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-56 sm:h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src={toko}
              alt="Clean-Area"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-14 md:py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-900 mb-10 text-center">
            Perjalanan Kami
          </h2>

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`grid gap-8 items-center md:grid-cols-2 ${
                  i % 2 === 1
                    ? 'md:[&>.media]:order-2 md:[&>.content]:order-1'
                    : ''
                }`}
              >
                <div className="media relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                  <div className="w-full h-full p-2 sm:p-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover object-center rounded-xl"
                      draggable={false}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <span className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-3 py-1 text-xs font-black text-emerald-950">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="content rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-10 rounded-full bg-emerald-900" />
                    <div className="text-emerald-900 font-black">
                      {item.year}
                    </div>
                  </div>

                  <h3 className="mt-3 text-xl md:text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-14 md:py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-emerald-800 mb-10 text-center">
          Nilai-Nilai Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-emerald-100
                     hover:border-emerald-400 hover:shadow-md hover:-translate-y-1
                     transition-all duration-300"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 mb-4">
                  <Icon size={26} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-emerald-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-800">
              Apa Kata Klien Kami
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Beberapa pengalaman klien setelah menggunakan layanan kami.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, testimonials.length - 2).map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <Avatar name={t.name} src={t.avatar} />
                    <div>
                      <div className="mb-2 text-amber-400 text-sm">★★★★★</div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        “{t.text}”
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t.role} • {t.city}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="grid gap-5 sm:grid-cols-2 w-full max-w-[760px]">
                {testimonials.slice(-2).map((t, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar name={t.name} src={t.avatar} />
                      <div>
                        <div className="mb-2 text-amber-400 text-sm">★★★★★</div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          “{t.text}”
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="font-semibold text-gray-900 text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t.role} • {t.city}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY — SEKARANG PAKAI GAMBAR */}
      {/* GALLERY — SEKARANG PAKAI 6 GAMBAR */}
      {/* GALLERY — TANPA TEKS */}
      <section className="py-14 md:py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-900 mb-10 text-center">
            Galeri Kami
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative h-40 sm:h-52 md:h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200 cursor-pointer"
                onMouseEnter={() => setHoveredGallery(item.id)}
                onMouseLeave={() => setHoveredGallery(null)}
                style={{
                  transform:
                    hoveredGallery === item.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 220ms ease',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                {/* Tidak ada teks, tidak ada overlay */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[28px] bg-amber-400 p-8 sm:p-10 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-emerald-950">
              Siap bikin sepatu kamu kembali bersih?
            </h3>
            <p className="mt-3 text-emerald-950/80">
              Hubungi kami sekarang dan pantau progres sepatu kamu secara
              transparan.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="https://wa.me/6287711428015"
                className="rounded-2xl bg-emerald-950 px-8 py-3 text-white font-black hover:bg-emerald-900 transition"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
