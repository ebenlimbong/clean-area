// Home.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import konten1 from '../../assets/images/home/konten1.png';
import konten2 from '../../assets/images/home/konten2.png';
import konten3 from '../../assets/images/home/konten3.png';
import konten4 from '../../assets/images/home/konten4.png';
import konten5 from '../../assets/images/home/konten5.png';

// ✅ 3 FOTO SEPATU (sesuaikan nama file kamu)
import gambar1 from '../../assets/images/home/gambar1.png';
import gambar2 from '../../assets/images/home/gambar2.png';
import gambar3 from '../../assets/images/home/gambar3.png';

const services = [
  {
    title: 'Cleaning',
    desc: 'Perawatan sepatu profesional dengan hasil maksimal.',
    img: konten1,
  },
  {
    title: 'Repair',
    desc: 'Perawatan sepatu profesional dengan hasil maksimal.',
    img: konten2,
  },
  {
    title: 'Repaint',
    desc: 'Perawatan sepatu profesional dengan hasil maksimal.',
    img: konten3,
  },
  {
    title: 'Custom',
    desc: 'Perawatan sepatu profesional dengan hasil maksimal.',
    img: konten4,
  },
  {
    title: 'Paket Usaha',
    desc: 'Perawatan sepatu profesional dengan hasil maksimal.',
    img: konten5,
  },
];

function HeroFull() {
  const navigate = useNavigate();
  const shoes = [gambar1, gambar2, gambar3];
  const [activeShoe, setActiveShoe] = useState(0);

  return (
    <section className="relative w-full overflow-x-hidden overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
      {/* BLOBS / WAVES */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-[520px] w-[520px] sm:h-[620px] sm:w-[620px] rounded-full bg-gradient-to-br from-emerald-900/10 via-white/5 to-amber-400/10 blur-2xl" />
        <div className="absolute -right-10 top-10 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] rounded-full bg-gradient-to-br from-amber-400/10 via-transparent to-emerald-200/10 opacity-60 blur-2xl" />
        <div className="absolute -left-52 -bottom-52 h-[520px] w-[520px] sm:h-[620px] sm:w-[620px] rounded-full bg-gradient-to-br from-white/5 via-transparent to-emerald-200/10 blur-2xl" />
        <div className="absolute bottom-[-140px] left-[-80px] h-[260px] w-[760px] rotate-[-10deg] rounded-[999px] bg-white/10 blur-2xl" />
        <div className="absolute bottom-[-40px] left-[140px] h-[200px] w-[620px] rotate-[8deg] rounded-[999px] bg-white/10 blur-2xl" />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 pt-[104px] sm:pt-[116px] lg:pt-[132px] pb-[72px] sm:pb-[86px]">
        {/* ✅ Mobile 1 kolom, mulai md jadi 2 kolom */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-14">
          {/* LEFT */}
          <div className="max-w-xl mx-auto text-center md:text-left md:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Sepatu <span className="text-amber-300">Bersih</span>,
              <br />
              Perawatan <span className="text-amber-300">Premium</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
              Layanan perawatan sepatu profesional: cleaning, repair, repaint,
              custom proses rapi, aman untuk material, dan bisa tracking order.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={() => navigate('/layanan')}
                className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-black hover:bg-amber-300 transition shadow-lg"
              >
                Lihat Layanan
              </button>

              <button
                onClick={() => navigate('/tracking')}
                className="rounded-2xl bg-white/10 px-6 py-3 font-black text-white border border-white/20 hover:bg-white/15 transition"
              >
                Track Order
              </button>
            </div>

            {/* WHY CHOOSE US */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur">
                <div className="text-amber-300 text-sm font-black mb-2">
                  Aman Material
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Setiap sepatu ditangani sesuai jenis bahan tanpa risiko rusak.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur">
                <div className="text-amber-300 text-sm font-black mb-2">
                  Proses Transparan
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Progres pengerjaan bisa dipantau dari awal sampai selesai.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur">
                <div className="text-amber-300 text-sm font-black mb-2">
                  Hasil Premium
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fokus pada kerapian, detail, dan kenyamanan saat dipakai.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT (gambar sepatu) */}
          <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[620px] md:max-w-[620px] lg:max-w-[860px] md:mx-0 md:justify-self-end">
            {/* area gambar */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/10] min-h-[260px] sm:min-h-[360px] lg:min-h-[520px]">
              <img
                src={shoes[activeShoe]}
                alt="Sepatu Clean-Area"
                draggable={false}
                className="
                  absolute inset-0 m-auto
                  w-full h-full object-contain
                  drop-shadow-[0_70px_80px_rgba(0,0,0,0.55)]
                  select-none
                  lg:translate-x-10
                "
              />
            </div>

            {/* THUMBNAILS */}
            <div className="mt-4 flex items-center justify-center gap-3">
              {shoes.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveShoe(idx)}
                  className={`
                    relative
                    h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16
                    border transition
                    ${
                      activeShoe === idx
                        ? 'border-amber-400/80'
                        : 'border-white/20 hover:border-white/40'
                    }
                    bg-white/5 hover:bg-white/10
                  `}
                  aria-label={`Pilih sepatu ${idx + 1}`}
                  type="button"
                >
                  <img
                    src={img}
                    alt={`thumb-${idx + 1}`}
                    draggable={false}
                    className="h-full w-full object-contain p-2 opacity-90"
                  />
                  {activeShoe === idx && (
                    <div className="pointer-events-none absolute inset-0 border-2 border-amber-400/70" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-3 text-center text-xs text-white/70">
              Hasil rapi • Aman material • Bisa tracking order
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 bg-gradient-to-b from-transparent" />
    </section>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { value: '6 Tahun+', label: 'berdiri & dipercaya pelanggan' },
    { value: '30000+', label: 'pasang sepatu telah ditangani' },
    { value: '30000+', label: 'pelanggan puas dengan layanan kami' },
    { value: 'Rp 25.000', label: 'harga mulai cuci sepatu' },
  ];

  return (
    <div className="min-h-screen bg-emerald-950">
      <HeroFull />

      <div className="space-y-20 bg-white pt-8">
        {/* STATS */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="rounded-[36px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 p-6 sm:p-8 shadow-xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white/95 backdrop-blur border border-emerald-900/10 p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="h-1.5 w-12 rounded-full bg-amber-400 mb-4" />
                  <div className="text-2xl sm:text-3xl font-black text-emerald-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black text-emerald-900">
              Layanan Kami
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Kami memberikan berbagai macam layanan perawatan sepatu dikerjakan
              dengan standar premium, rapi, dan aman untuk material sepatu kamu.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((s) => (
              <div
                key={s.title}
                className="group rounded-[32px] bg-emerald-950 p-3 shadow-xl border border-emerald-900/10 hover:-translate-y-1 transition-all"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full aspect-square object-cover group-hover:scale-[1.03] transition duration-500"
                    draggable={false}
                  />
                  <div className="absolute left-3 top-3 rounded-xl bg-white/90 px-3 py-1 text-[11px] font-black text-emerald-900 shadow">
                    Clean-Area
                  </div>
                </div>

                <div className="px-4 pb-5 pt-5 text-center">
                  <h3 className="text-xl font-black text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {s.desc}
                  </p>

                  <div className="mt-5 flex justify-center">
                    <button
                      onClick={() => navigate('/layanan')}
                      className="rounded-2xl bg-amber-400 px-5 py-2 text-sm font-black text-black hover:bg-amber-300 transition"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            {services.slice(3).map((s) => (
              <div
                key={s.title}
                className="group w-full sm:w-[calc(50%-16px)] md:w-[380px] rounded-[32px] bg-emerald-950 p-3 shadow-xl border border-emerald-900/10 hover:-translate-y-1 transition-all"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full aspect-square object-cover group-hover:scale-[1.03] transition duration-500"
                    draggable={false}
                  />
                  <div className="absolute left-3 top-3 rounded-xl bg-white/90 px-3 py-1 text-[11px] font-black text-emerald-900 shadow">
                    Clean-Area
                  </div>
                </div>

                <div className="px-4 pb-5 pt-5 text-center">
                  <h3 className="text-xl font-black text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {s.desc}
                  </p>

                  <div className="mt-5 flex justify-center">
                    <button
                      onClick={() => navigate('/layanan')}
                      className="rounded-2xl bg-amber-400 px-5 py-2 text-sm font-black text-black hover:bg-amber-300 transition"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-6xl mx-auto px-4 pb-24">
          <div className="rounded-3xl bg-amber-400 p-10 text-center shadow-xl">
            <h3 className="text-3xl font-black text-black">
              Siap bikin sepatu kamu kembali bersih?
            </h3>
            <p className="mt-3 text-black/80">
              Hubungi kami sekarang dan pantau progres sepatu kamu secara
              transparan.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                className="rounded-2xl bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800 transition-all shadow-md"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}