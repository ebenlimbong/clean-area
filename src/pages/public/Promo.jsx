import React, { useMemo, useState } from "react";
import {
  Tag,
  Gift,
  Clock,
  Star,
  Sparkles,
  TrendingUp,
  Copy,
  Check,
  ChevronRight,
  X,
} from "lucide-react";

// Import gambar lokal dari folder assets/images/promo/
import promo1 from "../../assets/images/promo/promo1.png";
import promo2 from "../../assets/images/promo/promo2.png";
import promo3 from "../../assets/images/promo/promo3.png";
import promo4 from "../../assets/images/promo/promo4.png";

export default function Promo() {
  const [activeTab, setActiveTab] = useState("semua");
  const [copiedCode, setCopiedCode] = useState("");
  const [selectedPromo, setSelectedPromo] = useState(null); // Untuk modal

  // Data promo dengan gambar import
  const promos = useMemo(
    () => [
      {
        id: 1,
        category: "member",
        title: "Member Baru Diskon 30%",
        description:
          "Dapatkan diskon 30% untuk cuci sepatu pertama Anda sebagai member baru!",
        discount: "30%",
        validUntil: "31 Desember 2024",
        code: "NEWMEMBER30",
        badge: "Member",
        image: promo1,
        // Detail tambahan untuk modal
        serviceDetails: [
          "Deep cleaning detail",
          "Pembersihan interior & exterior",
          "Penghilangan noda membandel",
          "Perawatan material khusus",
          "Opsional treatment protection",
        ],
        duration: "1–2 hari kerja",
        priceStart: "Rp 50.000",
        whyChoose: "Teknik rapi, aman untuk material, hasil lebih tahan lama.",
      },
      {
        id: 2,
        category: "paket",
        title: "Paket Hemat 3 Pasang",
        description: "Cuci 3 pasang sepatu sekaligus dan hemat hingga 50rb!",
        discount: "Rp 50.000",
        validUntil: "15 Januari 2025",
        code: "PAKET3",
        badge: "Paket",
        image: promo2,
        serviceDetails: [
          "Cuci 3 pasang sepatu",
          "Hemat hingga Rp 50.000",
          "Pengerjaan cepat",
          "Garansi hasil bersih",
        ],
        duration: "2–3 hari kerja",
        priceStart: "Rp 100.000",
        whyChoose: "Ideal untuk keluarga atau koleksi sepatu banyak.",
      },
      {
        id: 3,
        category: "weekend",
        title: "Weekend Special",
        description:
          "Setiap weekend dapatkan diskon 20% untuk semua layanan cuci sepatu!",
        discount: "20%",
        validUntil: "Setiap Sabtu–Minggu",
        code: "WEEKEND20",
        badge: "Weekend",
        image: promo3,
        serviceDetails: [
          "Diskon 20% untuk semua layanan",
          "Berlaku akhir pekan",
          "Bisa mix sepatu",
          "Hasil maksimal",
        ],
        duration: "1–2 hari kerja",
        priceStart: "Mulai Rp 50.000",
        whyChoose: "Manfaatkan waktu weekend untuk perawatan sepatu Anda!",
      },
      {
        id: 4,
        category: "premium",
        title: "Deep Cleaning Premium",
        description: "Upgrade ke layanan deep cleaning premium dengan diskon 25%",
        discount: "25%",
        validUntil: "31 Januari 2025",
        code: "PREMIUM25",
        badge: "Premium",
        image: promo4,
        serviceDetails: [
          "Deep cleaning premium",
          "Treatment khusus material",
          "Penghilangan noda ekstrem",
          "Proteksi anti-kotoran",
          "Hasil tahan lama",
        ],
        duration: "2–4 hari kerja",
        priceStart: "Mulai Rp 80.000",
        whyChoose: "Untuk sepatu kesayangan yang butuh perawatan ekstra.",
      },
    ],
    []
  );

  const tabs = [
    { key: "semua", label: "Semua Promo" },
    { key: "member", label: "Member" },
    { key: "paket", label: "Paket Hemat" },
    { key: "weekend", label: "Weekend" },
    { key: "premium", label: "Premium" },
  ];

  // Filter promo berdasarkan tab, maksimal 4 promo
  const filteredPromos =
    activeTab === "semua"
      ? promos.slice(0, 4)
      : promos.filter((p) => p.category === activeTab).slice(0, 4);

  const copyPromo = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(""), 1200);
    } catch {
      // fallback: do nothing
    }
  };

  const badgeStyle = (badge) => {
    const base =
      "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-black border";
    if (badge === "Premium")
      return `${base} bg-amber-400/15 text-amber-200 border-amber-400/25`;
    if (badge === "Weekend")
      return `${base} bg-emerald-200/10 text-emerald-100 border-white/10`;
    return `${base} bg-white/10 text-white border-white/10`;
  };

  // Fungsi untuk menutup modal
  const closeModal = () => setSelectedPromo(null);

  // Fungsi untuk membuka WhatsApp
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya ingin memesan layanan: ${selectedPromo?.title} \nKode Promo: ${selectedPromo?.code}`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
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
            <Tag className="h-8 w-8 text-amber-300" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Promo <span className="text-amber-300">Special</span>
          </h1>
          <p className="mt-4 text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Dapatkan penawaran terbaik untuk layanan perawatan sepatu premium kami.
            Hemat, rapi, dan transparan.
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
                    ? "bg-emerald-950 text-white border-emerald-950"
                    : "bg-white text-emerald-950 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PROMO CARDS – hanya 4 */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPromos.map((promo) => (
            <div
              key={promo.id}
              className="group rounded-[20px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedPromo(promo)} // 🔥 Klik untuk buka modal
            >
              {/* Gambar Promo */}
              <div className="h-48 w-full overflow-hidden relative">
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

              {/* Overlay Gradien Hijau Tua */}
              <div className="relative p-6 bg-gradient-to-t from-emerald-950 via-emerald-900 to-transparent text-white">
                {/* Diskon Besar */}
                <div className="text-3xl md:text-4xl font-black text-amber-300">
                  {promo.discount}
                </div>

                {/* Judul Promo */}
                <h3 className="mt-1 text-xl font-black">{promo.title}</h3>

                {/* Deskripsi */}
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  {promo.description}
                </p>

                {/* Tanggal Berlaku */}
                <div className="mt-4 flex items-center gap-2 text-xs text-white/75">
                  <Clock className="h-4 w-4" />
                  <span>
                    Berlaku hingga:{" "}
                    <span className="font-semibold">{promo.validUntil}</span>
                  </span>
                </div>
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
                title: "Promo Eksklusif",
                desc: "Dapatkan promo khusus member setiap bulan.",
              },
              {
                icon: <Star className="h-7 w-7 text-amber-300" />,
                title: "Poin Reward",
                desc: "Kumpulkan poin setiap transaksi.",
              },
              {
                icon: <TrendingUp className="h-7 w-7 text-amber-300" />,
                title: "Diskon Berlipat",
                desc: "Semakin sering cuci, semakin hemat.",
              },
              {
                icon: <Sparkles className="h-7 w-7 text-amber-300" />,
                title: "Birthday Special",
                desc: "Hadiah spesial di hari ulang tahun.",
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-[28px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 p-8 md:p-12 text-center text-white relative overflow-hidden border border-white/10">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/10 blur-3xl" />

          <h2 className="text-3xl md:text-4xl font-black">
            Jangan Lewatkan <span className="text-amber-300">Promonya</span>!
          </h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Daftar sekarang dan nikmati berbagai keuntungan sebagai member.
            Sepatu bersih, harga lebih hemat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-8 py-4 font-black text-emerald-950 hover:bg-amber-300 transition shadow">
              Daftar Member Sekarang <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL DETAIL LAYANAN */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-emerald-950 flex items-center justify-center">
                  <Tag className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-black text-emerald-950">{selectedPromo.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="rounded-full p-2 hover:bg-slate-100 transition"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            {/* Body Modal */}
            <div className="flex gap-6 p-6">
              {/* Gambar Promo */}
              <div className="w-1/2">
                <img
                  src={selectedPromo.image}
                  alt={selectedPromo.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Detail Promo */}
              <div className="w-1/2 space-y-6">
                <div className="text-sm text-slate-600">
                  {selectedPromo.description}
                </div>

                {/* Diskon Besar */}
                <div className="text-3xl font-black text-amber-300">
                  {selectedPromo.discount}
                </div>

                {/* Duration & Price */}
                <div className="flex gap-4">
                  <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-950">
                    <Clock className="inline mr-1 h-4 w-4" />
                    {selectedPromo.duration}
                  </div>
                  <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-black text-amber-950">
                    <Star className="inline mr-1 h-4 w-4" />
                    Mulai {selectedPromo.priceStart}
                  </div>
                </div>

                {/* What You Get */}
                <div>
                  <h4 className="font-black text-emerald-950 mb-2">Yang kamu dapat</h4>
                  <ul className="space-y-1 text-sm">
                    {selectedPromo.serviceDetails.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose Us */}
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-950">
                    <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <span className="font-black">Kenapa pilih kami:</span>
                  </div>
                  <p className="mt-1 text-sm">{selectedPromo.whyChoose}</p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="flex-1 rounded-xl bg-emerald-950 px-6 py-3 font-black text-white hover:bg-emerald-900 transition"
                  >
                    Pesan via WhatsApp
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 rounded-xl border border-slate-300 px-6 py-3 font-black text-slate-700 hover:bg-slate-50 transition"
                  >
                    Tutup
                  </button>
                </div>

                <div className="text-xs text-slate-500 mt-2">
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