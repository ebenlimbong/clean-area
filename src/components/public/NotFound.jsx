import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a2116] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        {/* Visual 404 */}
        <div className="relative">
          <h1 className="text-[12rem] font-black text-white/5 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">

          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-black text-white tracking-tight">Halaman Tidak Ditemukan</h2>
          <p className="text-white/40 font-medium">
            Maaf, sepertinya Anda tersesat. Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <button
            onClick={() => navigate("/")}
            className="w-full py-4 rounded-2xl bg-white text-[#184832] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-black/20"
          >
            Kembali ke Beranda
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white/70 font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
}