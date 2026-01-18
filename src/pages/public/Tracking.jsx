import { useEffect, useState } from "react";
import { fetchPublicOrders, trackPublicOrder } from "../../lib/publicOrders";
import { Search, Filter, Ticket, Eye, X, CreditCard, Image as ImageIcon, Hash } from "lucide-react";

export default function Tracking() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  async function load() {
    try {
      setLoading(true);
      const rows = await fetchPublicOrders(); 
      setOrders(rows ?? []);
    } catch (e) {
      console.error("Gagal memuat data tracking publik", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleViewDetail(ticketCode) {
    try {
      setLoadingDetail(true);
      const detail = await trackPublicOrder(ticketCode); 
      setSelectedOrder(detail);
    } catch (e) {
      console.error(e);
      alert("Gagal memuat detail pesanan.");
    } finally {
      setLoadingDetail(false);
    }
  }

  // UPDATE: Logic Search mendukung Griya Pos Code
  const filteredOrders = orders.filter((o) => {
    const matchesStatus = filterStatus === "ALL" || o.order_status?.toUpperCase() === filterStatus.toUpperCase();
    
    const matchesSearch = 
      o.ticket_code?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (o.griya_pos_code && o.griya_pos_code.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesStatus && matchesSearch;
  });

  const getStatusStyle = (status) => {
    const s = status?.toLowerCase();
    if (s === "done" || s === "paid") return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    if (s === "pending" || s === "process") return "text-orange-400 bg-orange-500/10 border-orange-500/20";
    if (s === "cancel") return "text-red-400 bg-red-400/10 border-red-400/20";
    return "text-white/40 bg-white/5 border-white/10";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-black text-white tracking-tight">Track Your Order</h1>
        <p className="text-white/40 font-medium">Pantau status pengerjaan sepatu Anda secara real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/5 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input 
            type="text"
            placeholder="Cari Tiket atau No. Griya Pos (Nota)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder:text-white/10 outline-none focus:border-emerald-500/50 transition-all font-mono"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white appearance-none outline-none font-bold text-xs uppercase tracking-widest cursor-pointer"
          >
            <option value="ALL" className="bg-[#184832]">Semua Status</option>
            <option value="PENDING" className="bg-[#184832]">Pending</option>
            <option value="PROCESS" className="bg-[#184832]">Process</option>
            <option value="DONE" className="bg-[#184832]">Done</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl font-medium text-white/80">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-white/40 text-[10px] uppercase tracking-[0.2em] font-black border-b border-white/10">
              <tr>
                <th className="p-6">No</th>
                <th className="p-6">Ticket Code</th>
                <th className="p-6">No. Griya Pos</th> {/* KOLOM BARU */}
                <th className="p-6">Service</th>
                <th className="p-6 text-center">Status</th>
                <th className="p-6 text-right">Update</th>
                <th className="p-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr><td colSpan="7" className="p-20 text-center text-white/20 animate-pulse">Loading data antrean...</td></tr>
              ) : filteredOrders.length === 0 ? (
                <tr><td colSpan="7" className="p-20 text-center text-white/20 italic font-bold tracking-widest uppercase">Pesanan tidak ditemukan.</td></tr>
              ) : (
                filteredOrders.map((o, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6 text-white/20 font-mono">{index + 1}</td>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><Ticket size={16}/></div>
                        <span className="font-mono font-black tracking-widest uppercase">{o.ticket_code}</span>
                      </div>
                    </td>
                    {/* DATA BARU: GRIYA POS */}
                    <td className="p-6">
                      {o.griya_pos_code ? (
                        <span className="font-mono text-emerald-400/80 bg-emerald-400/5 px-2 py-1 rounded border border-emerald-400/10 text-xs">
                          {o.griya_pos_code}
                        </span>
                      ) : (
                        <span className="text-white/10 italic text-[10px]">Manual Entry</span>
                      )}
                    </td>
                    <td className="p-6">{o.service}</td>
                    <td className="p-6 text-center">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase border tracking-widest ${getStatusStyle(o.order_status)}`}>
                          {o.order_status}
                        </span>
                    </td>
                    <td className="p-6 text-right text-white/30 text-[11px]">
                        {new Date(o.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}
                    </td>
                    <td className="p-6 text-center">
                      <button 
                        onClick={() => handleViewDetail(o.ticket_code)}
                        className="p-2.5 bg-white/5 hover:bg-white hover:text-[#184832] rounded-xl transition-all border border-white/10"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0a2116]/90 backdrop-blur-md" onClick={() => setSelectedOrder(null)} />
          
          <div className="relative w-full max-w-2xl bg-[#184832] border border-white/20 rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Tracking {selectedOrder.ticket_code}</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Detail Informasi Pesanan</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="p-2 rounded-full bg-white/5 text-white/40 hover:text-white transition-colors">
                <X size={24}/>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white/5 p-5 rounded-3xl border border-white/10 space-y-4">
                  {/* DATA TAMBAHAN DI MODAL: GRIYA POS */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">No. Nota (Griya Pos)</p>
                      <p className="text-emerald-400 font-mono font-bold">{selectedOrder.griya_pos_code || "-"}</p>
                    </div>
                    <Hash size={20} className="text-white/10" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Layanan</p>
                    <p className="text-white font-bold">{selectedOrder.service}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Order Status</p>
                      <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase border ${getStatusStyle(selectedOrder.order_status)}`}>
                        {selectedOrder.order_status}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Payment</p>
                      <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase border ${getStatusStyle(selectedOrder.payment_status)}`}>
                        {selectedOrder.payment_status}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedOrder.admin_note && (
                  <div className="bg-orange-500/5 p-5 rounded-3xl border border-orange-500/10 italic text-sm text-orange-200/70 leading-relaxed shadow-inner">
                    <div className="flex items-center gap-2 mb-2 not-italic">
                      <CreditCard size={14} className="text-orange-400/50" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-orange-400/40">Catatan Admin</p>
                    </div>
                    "{selectedOrder.admin_note}"
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                  <ImageIcon size={14} className="text-white/30" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Foto Progress</p>
                </div>
                <div className="grid grid-cols-2 gap-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                  {selectedOrder.photos?.map((p) => (
                    <a key={p.id} href={p.url} target="_blank" rel="noreferrer" className="aspect-square rounded-2xl overflow-hidden border border-white/10 group bg-white/5">
                      <img src={p.url} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt="Progress Sepatu" />
                    </a>
                  ))}
                  {selectedOrder.photos?.length === 0 && (
                    <div className="col-span-2 py-10 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Belum ada foto progress</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Clean Area Shoes Care • Professional Treatment</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}/*  */