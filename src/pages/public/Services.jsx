import { useEffect, useMemo, useState } from "react";
import {
  ChevronRight,
  Check,
  Clock,
  Shield,
  Star,
  X,
  WashingMachine,
  Hammer,
  Palette,
  Sparkles,
  Package,
  UserCheck,
  Award,
  Timer,
  ShieldCheck,
} from "lucide-react";

import list1 from "../../assets/images/services/list1.PNG";
import list2 from "../../assets/images/services/list2.PNG";
import list3 from "../../assets/images/services/list3.PNG";
import list4 from "../../assets/images/services/list4.PNG";
import list5 from "../../assets/images/services/list5.PNG";

export default function Services() {
  const WHATSAPP_NUMBER = "6281234567890"; // ✅ ganti kalau perlu

  const [openId, setOpenId] = useState(null);

  const services = useMemo(
    () => [
      {
        id: "cleaning",
        title: "Cleaning",
        shortDesc: "Pembersihan sepatu profesional dengan hasil maksimal.",
        icon: WashingMachine,
        image: list1,
        fullDescription:
          "Layanan pembersihan sepatu profesional menggunakan produk premium yang aman untuk berbagai jenis material.",
        features: [
          "Deep cleaning detail",
          "Pembersihan interior & exterior",
          "Penghilangan noda membandel",
          "Perawatan material khusus",
          "Opsional treatment protection",
        ],
        price: "Mulai Rp 50.000",
        duration: "2-6 hari kerja",
        whyChoose: "Teknik rapi, aman untuk material, hasil lebih tahan lama.",
      },
      {
        id: "repair",
        title: "Product",
        shortDesc: "Product untuk kebersihan sepatu anda .",
        icon: Hammer,
        image: list2,
        fullDescription:
          "Perbaikan sepatu mencakup sol, jahitan, heel, dan struktur dengan material berkualitas.",
        features: [
          "Penggantian sol (rubber/leather/crepe)",
          "Perbaikan jahitan robek",
          "Perbaikan heel & struktur",
          "Pengeleman ulang bagian terlepas",
          "Restorasi bentuk sepatu",
        ],
        price: "Mulai Rp 75.000",
        duration: "",
        whyChoose: "Teknisi berpengalaman untuk repair ringan hingga kompleks.",
      },
      {
        id: "repaint",
        title: "Custom",
        shortDesc: "Desain & modifikasi sepatu sesuai konsep kamu.",
        icon: Palette,
        image: list3,
        fullDescription:
          "Repaint menggunakan cat berkualitas tinggi dengan finishing lebih halus, anti crack, dan tidak mudah mengelupas.",
        features: [
          "Repaint area tertentu / full repaint",
          "Custom color (sesuai request)",
          "Finishing matte / glossy",
          "Teknik anti crack",
          "Perawatan coating",
        ],
        price: "Mulai Rp 120.000",
        duration: "12-30 hari kerja",
        whyChoose: "Hasil warna lebih solid, rapi, dan nyaman dipakai harian.",
      },
      {
        id: "custom",
        title: "Cleaning",
        shortDesc: "Bersihkan barang barang anda yang lain yuk.",
        icon: Sparkles,
        image: list4,
        fullDescription:
          "Custom untuk kamu yang ingin sepatu tampil beda: warna, detail, hingga konsep desain khusus.",
        features: [
          "Konsultasi konsep",
          "Pilihan detail & warna",
          "Pengerjaan rapi dan presisi",
          "Request detail (sesuai kesepakatan)",
          "Quality check sebelum selesai",
        ],
        price: "Mulai Rp 30.000",
        duration: "2-5 hari kerja",
        whyChoose: "Detail custom lebih niat, bukan asal jadi — fokus ke finishing.",
      },
      {
        id: "paket",
        title: "Repair Treatment",
        shortDesc: "Bundling hemat untuk perawatan rutin & koleksi sepatu.",
        icon: Package,
        image: list5,
        fullDescription:
          "Paket hemat menggabungkan beberapa layanan dengan harga spesial, cocok untuk perawatan rutin.",
        features: [
          "Paket Starter (hemat untuk rutin)",
          "Paket Pro (mix layanan)",
          "Paket Premium (priority)",
          "Diskon bundling",
          "Konsultasi perawatan",
          "Priority queue untuk urgent",
        ],
        price: "Mulai Rp 30.000",
        duration: "7-14 hari kerja  ",
        whyChoose: "Lebih hemat dan fleksibel sesuai kebutuhan perawatanmu.",
      },
    ],
    []
  );

  const active = useMemo(
    () => services.find((s) => s.id === openId),
    [services, openId]
  );

  const closeModal = () => setOpenId(null);
  const openModal = (id) => setOpenId(id);

  // ESC close + lock scroll saat modal terbuka
  useEffect(() => {
    if (!openId) return;

    const onKeyDown = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openId]);

  const waLink = (serviceTitle) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Halo Clean-Area, saya mau pesan layanan: ${serviceTitle}. Bisa dibantu info detailnya?`
    )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Layanan <span className="text-amber-300">Kami</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed">
              Perawatan sepatu standar premium — rapi, aman untuk material, dan
              cocok untuk daily sampai koleksi.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 md:py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-emerald-900 border border-black/5">
                  Clean-Area
                </div>
              </div>

              {/* INFO */}
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <service.icon className="text-emerald-700" size={24} />
                  <h3 className="text-2xl font-black text-emerald-950">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock size={16} className="text-emerald-700" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 font-black text-emerald-950">
                    <Star size={16} className="text-amber-500" />
                    <span>{service.price}</span>
                  </div>
                </div>

                <button
                  onClick={() => openModal(service.id)}
                  className="mt-6 w-full rounded-2xl bg-amber-400 py-3 font-black text-emerald-950 hover:bg-amber-300 transition inline-flex items-center justify-center gap-2 shadow border border-black/10"
                >
                  Lihat Detail <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {openId && active && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* box */}
          <div
            className="relative w-full max-w-4xl rounded-[28px] bg-white shadow-2xl border border-black/10 overflow-hidden max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* sticky header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <active.icon className="text-emerald-700" size={20} />
                <div className="font-black text-emerald-950 text-lg">
                  {active.title}
                </div>
              </div>

              <button
                onClick={closeModal}
                className="h-10 w-10 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-slate-700" />
              </button>
            </div>

            {/* content */}
            <div className="grid md:grid-cols-2">
              {/* image */}
              <div className="relative">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-56 sm:h-72 md:h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              </div>

              {/* text */}
              <div className="p-5 sm:p-7">
                <p className="text-slate-700 leading-relaxed">
                  {active.fullDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-950 px-4 py-2 font-black border border-emerald-900/10">
                    <Clock className="h-4 w-4" /> {active.duration}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-emerald-950 px-4 py-2 font-black border border-amber-400/40">
                    <Star className="h-4 w-4 text-amber-500" /> {active.price}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-sm font-black text-emerald-950 mb-3">
                    Yang kamu dapat
                  </div>
                  <ul className="space-y-2">
                    {active.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <Check
                          size={16}
                          className="text-emerald-700 flex-shrink-0 mt-0.5"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-4">
                  <div className="flex items-start gap-2">
                    <Shield
                      size={16}
                      className="text-emerald-700 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-slate-700">
                      <span className="font-black text-emerald-950">
                        Kenapa pilih kami:
                      </span>{" "}
                      {active.whyChoose}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={waLink(active.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-2xl bg-emerald-800 text-white py-3 font-black hover:brightness-110 transition text-center"
                  >
                    Pesan via WhatsApp
                  </a>

                  <button
                    onClick={closeModal}
                    className="flex-1 rounded-2xl bg-white border border-slate-200 py-3 font-black text-emerald-950 hover:bg-slate-50 transition"
                  >
                    Tutup
                  </button>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  *Harga dapat berubah sesuai kondisi sepatu & material.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WHY SECTION */}
      <section className="py-14 md:py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-10 text-center">
            Kenapa pilih <span className="text-amber-500">Clean-Area</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: UserCheck,
                title: "Profesional",
                desc: "Dikerjakan tim berpengalaman, hasil lebih konsisten.",
              },
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Standar rapi dan aman untuk berbagai material sepatu.",
              },
              {
                icon: Timer,
                title: "Cepat & Tepat",
                desc: "Estimasi jelas, pengerjaan efisien tanpa asal-asalan.",
              },
              {
                icon: ShieldCheck,
                title: "Terpercaya",
                desc: "Dipercaya banyak pelanggan untuk sepatu daily & koleksi.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm"
              >
                <div className="text-emerald-700 mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="font-black text-emerald-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}