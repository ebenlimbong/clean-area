import React, { useMemo, useState } from 'react';
import {
  Tag,
  Gift,
  Clock,
  Star,
  Sparkles,
  TrendingUp,
  ChevronRight,
  X,
  CheckCircle,
} from 'lucide-react';

// Import gambar lokal
import promo1 from '../../assets/images/promo/family.png';
import promo2 from '../../assets/images/promo/student.png';
import promo3 from '../../assets/images/promo/grup.png';
import promo4 from '../../assets/images/promo/kartu.jpg';

export default function Promo() {
  const [activeTab, setActiveTab] = useState('semua');
  const [selectedPromo, setSelectedPromo] = useState(null);

  const promos = useMemo(
    () => [
      {
        id: 1,
        category: 'member',
        title: 'FAMILLY CLEAN PACK',
        description:
          'DISC 10% + 1 FREE SHOES DEO ',
        validUntil: '31 Desember 2024',
        code: '',
        badge: 'Member',
        image: promo1,
        serviceDetails: [
          'Deep cleaning detail',
          'Pembersihan interior & exterior',
          'Penghilangan noda membandel',
          'Perawatan material khusus',
          'Opsional treatment protection',
        ],
        duration: '1–2 hari kerja',
        priceStart: 'Rp 50.000',
        whyChoose: 'Teknik rapi, aman untuk material, hasil lebih tahan lama.',
      },
      {
        id: 2,
        category: 'paket',
        title: ' STUDENT SMART PACK',
        description: '(3 PASANG SEPATU) ONLY 100K',
        validUntil: '15 Januari 2025',
        code: 'PAKET3',
        badge: 'Paket',
        image: promo2,
        serviceDetails: [
          'Cuci 3 pasang sepatu',
          'Garansi hasil bersih',
        ],
        duration: '2–3 hari kerja',
        priceStart: 'Rp 100.000',
        whyChoose: 'Ideal untuk keluarga atau koleksi sepatu banyak.',
      },
      {
        id: 3,
        category: 'weekend',
        title: 'GROUP PARTNER PACK',
        description:
          '(10–20 PASANG SEPATU) DISC 20% + 3 FREE SHOES DEO',
        validUntil: 'Setiap Sabtu–Minggu',
        code: 'WEEKEND20',
        badge: 'Weekend',
        image: promo3,
        serviceDetails: [
          'Diskon 20% ',
          'Bisa mix sepatu',
          'Hasil maksimal',
        ],
        duration: '1–2 hari kerja',
        priceStart: 'Mulai Rp 50.000',
        whyChoose: 'Manfaatkan waktu weekend untuk perawatan sepatu Anda!',
      },
      {
        id: 4,
        category: 'premium',
        title: 'Kartu Ajaib',
        description:
          'Kumpulkan 8 kartu untuk dapatkan Promo',
        validUntil: '31 Januari 2025',
        code: 'PREMIUM25',
        badge: 'Premium',
        image: promo4,
        serviceDetails: [
          'Free cleaning dengan 8 kartu ajaib',
          
        ],
        duration: '2–4 hari kerja',
        priceStart: 'Mulai Rp 80.000',
        whyChoose: 'Untuk sepatu kesayangan yang butuh perawatan ekstra.',
      },
    ],
    []
  );

  const tabs = [
    { key: 'semua', label: 'Semua Promo' },
    { key: 'member', label: 'Member' },
    { key: 'paket', label: 'Paket Hemat' },
    { key: 'weekend', label: 'Weekend' },
    { key: 'premium', label: 'Premium' },
  ];

  const filteredPromos =
    activeTab === 'semua'
      ? promos.slice(0, 4)
      : promos.filter((p) => p.category === activeTab).slice(0, 4);

  const closeModal = () => setSelectedPromo(null);

  const openWhatsApp = () => {
    if (!selectedPromo) return;
    const message = encodeURIComponent(
      `Halo, saya ingin memesan layanan ` 
    );
    // Pastikan tidak ada spasi berlebih setelah `text=`
    window.open(`https://wa.me/+6287711428015?text=${message}`, '_blank');
  };

  const badgeStyle = (badge) => {
    const base =
      'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-black border';
    if (badge === 'Premium')
      return `${base} bg-amber-400/15 text-amber-200 border-amber-400/25`;
    if (badge === 'Weekend')
      return `${base} bg-emerald-200/10 text-emerald-100 border-white/10`;
    return `${base} bg-white/10 text-white border-white/10`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 text-center">
          <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 border border-white/10">
            <Tag className="h-8 w-8 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Promo <span className="text-amber-400">Special</span>
          </h1>
          <p className="mt-4 text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Dapatkan penawaran terbaik untuk layanan perawatan sepatu premium
            kami. Hemat, rapi, dan transparan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-emerald-950 hover:bg-amber-300 transition shadow">
              Daftar Member
            </button>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-2 overflow-x-auto py-4">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`shrink-0 rounded-2xl px-5 py-2 text-sm font-black transition border ${
                  activeTab === t.key
                    ? 'bg-emerald-950 text-white border-emerald-950'
                    : 'bg-white text-emerald-950 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PROMO CARDS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPromos.map((promo) => (
            <div
              key={promo.id}
              className="group rounded-[20px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative h-auto md:h-[400px]"
              onClick={() => setSelectedPromo(promo)}
            >
              {/* Gambar Promo */}
              <div className="h-48 w-full overflow-hidden relative md:h-60">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge di pojok kiri atas */}
                <div className="absolute top-3 left-3">
                  <div className={badgeStyle(promo.badge)}>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    {promo.badge}
                  </div>
                </div>
                {/* Ikon Sparkles di pojok kanan atas */}
                <div className="absolute top-3 right-3">
                  <Sparkles className="h-5 w-5 text-amber-300" />
                </div>
              </div>

              {/* Overlay Solid Hijau Tua - Menutupi Seluruh Bagian Bawah Card */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-emerald-950/85 text-white">
                {/* Diskon Besar */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {promo.discount}
                </div>

                {/* Judul Promo */}
                <h3 className="mt-1 text-lg sm:text-xl font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {promo.title}
                </h3>

                {/* Deskripsi */}
                <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {promo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black text-center text-emerald-950 mb-12">
            Keuntungan Jadi Member
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Gift className="h-7 w-7 text-amber-300" />,
                title: 'Promo Eksklusif',
                desc: 'Dapatkan promo khusus member setiap bulan.',
              },
              {
                icon: <Star className="h-7 w-7 text-amber-300" />,
                title: 'Poin Reward',
                desc: 'Kumpulkan poin setiap transaksi.',
              },
              {
                icon: <TrendingUp className="h-7 w-7 text-amber-300" />,
                title: 'Diskon Berlipat',
                desc: 'Semakin sering cuci, semakin hemat.',
              },
              {
                icon: <Sparkles className="h-7 w-7 text-amber-300" />,
                title: 'Birthday Special',
                desc: 'Hadiah spesial di hari ulang tahun.',
              },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-14 w-14 rounded-3xl bg-emerald-950 flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="mt-4 font-black text-emerald-950">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* MODAL DETAIL LAYANAN — RESPONSIF & SCROLLABLE DI MOBILE */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md md:max-w-4xl rounded-2xl bg-white shadow-xl overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-950 flex items-center justify-center">
                  <Tag className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-black text-emerald-950">
                  {selectedPromo.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="rounded-full p-2 hover:bg-slate-100 transition"
              >
                <X className="h-6 w-6 text-slate-500" />
              </button>
            </div>

            {/* Body Modal - Responsif & Scrollable di Mobile */}
            <div className="flex flex-col md:flex-row gap-6 p-6 max-h-[80vh] overflow-y-auto">
              {/* Kolom Kiri: Gambar */}
              <div className="w-full md:w-1/2">
                <img
                  src={selectedPromo.image}
                  alt={selectedPromo.title}
                  className="w-full h-auto max-h-[30vh] md:max-h-none object-cover rounded-xl"
                />
              </div>

              {/* Kolom Kanan: Detail */}
              <div className="w-full md:w-1/2 space-y-6">
                {/* Diskon Besar */}
                <div className="text-2xl md:text-4xl font-black text-amber-400">
                  {selectedPromo.discount}
                </div>

                {/* Deskripsi Singkat */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {selectedPromo.description}
                </p>

                {/* Durasi & Harga Badge */}
                <div className="flex gap-3">
                  <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm md:text-base font-black text-emerald-950">
                    <Clock className="inline mr-1 h-4 w-4" />{' '}
                    {selectedPromo.duration}
                  </div>
                  <div className="rounded-full bg-amber-100 px-4 py-2 text-sm md:text-base font-black text-amber-800">
                    <Star className="inline mr-1 h-4 w-4" /> Mulai{' '}
                    {selectedPromo.priceStart}
                  </div>
                </div>

                {/* Yang Kamu Dapat */}
                <div>
                  <h4 className="font-black text-emerald-950 mb-2">
                    Yang kamu dapat
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    {selectedPromo.serviceDetails.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <div className="h-4 w-4 rounded-full bg-emerald-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kenapa Pilih Kami */}
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-950">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-black">Kenapa pilih kami:</span>
                  </div>
                  <p className="mt-1 text-sm md:text-base text-slate-700">
                    {selectedPromo.whyChoose}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="flex-1 rounded-xl bg-emerald-800 px-6 py-3 md:px-8 md:py-4 font-black text-white hover:bg-emerald-700 transition text-base md:text-lg"
                  >
                    Pesan via WhatsApp
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 rounded-xl border border-slate-300 px-6 py-3 md:px-8 md:py-4 font-black text-slate-700 hover:bg-slate-50 transition text-base md:text-lg"
                  >
                    Tutup
                  </button>
                </div>

                <div className="text-xs md:text-sm text-slate-500 mt-2">
                  *Harga dapat berubah sesuai kondisi sepatu & material.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
