import api from "./api";

// GET: /api/orders/public  -> return array orders
export async function fetchPublicOrders() {
  const res = await api.get("/orders/public");
  return res.data.data; // langsung array
}

// GET: /api/orders/track/{ticket} -> return object order
export async function trackPublicOrder(ticketCode) {
  const res = await api.get(`/orders/track/${encodeURIComponent(ticketCode)}`);
  return res.data.data; // langsung object
}
