import { useState } from "react";
import { updatePassword } from "../../lib/auth"; // Menggunakan fungsi yang sudah kita buat
import { Lock, Eye, EyeOff, Save, ShieldCheck } from "lucide-react";

export default function Profile() {
  // STEP 3 — State Management
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false); // Toggle show/hide password

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // STEP 4 — Submit Handler
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    // Validasi kecocokan password di sisi client
    if (form.new_password !== form.new_password_confirmation) {
      setError("Konfirmasi password baru tidak sama.");
      return;
    }

    try {
      setLoading(true);
      const res = await updatePassword(form); // Memanggil API
      setMessage(res.message || "Password berhasil diperbarui.");

      // Reset form setelah berhasil
      setForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Gagal memperbarui password."
      );
    } finally {
      setLoading(false);
    }
  }

  // STEP 5 — UI Form
  return (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 bg-white/10 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Profile Admin
          </h1>
          <p className="text-white/40 text-sm font-medium">
            Perbarui password keamanan akun Anda
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-6 backdrop-blur-md shadow-2xl"
      >
        {/* PASSWORD LAMA */}
        <Input
          label="Password Lama"
          name="current_password"
          value={form.current_password}
          onChange={handleChange}
          show={show}
          setShow={setShow}
          placeholder="Masukkan password saat ini"
        />

        {/* PASSWORD BARU */}
        <Input
          label="Password Baru"
          name="new_password"
          value={form.new_password}
          onChange={handleChange}
          show={show}
          setShow={setShow}
          placeholder="Min. 8 karakter"
        />

        {/* KONFIRMASI */}
        <Input
          label="Konfirmasi Password Baru"
          name="new_password_confirmation"
          value={form.new_password_confirmation}
          onChange={handleChange}
          show={show}
          setShow={setShow}
          placeholder="Ulangi password baru"
        />

        {/* Notifikasi Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-bold rounded-2xl p-4 animate-shake">
            {error}
          </div>
        )}

        {/* Notifikasi Sukses */}
        {message && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold rounded-2xl p-4">
            {message}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-[#184832] hover:bg-emerald-400 font-black py-4 rounded-2xl transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-black/20"
        >
          <Save size={18} />
          {loading ? "Sedang Menyimpan..." : "Simpan Perubahan Password"}
        </button>
      </form>

      <div className="text-center px-6">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold italic">
          Keamanan akun adalah prioritas CleanArea
        </p>
      </div>
    </div>
  );
}

// STEP 6 — Reusable Input Component
function Input({ label, name, value, onChange, show, setShow, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">
        {label}
      </label>

      <div className="relative group">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-500 transition-colors" size={18} />
        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-4 text-sm text-white outline-none focus:border-emerald-500/50 transition-all shadow-inner placeholder:text-white/10"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}