export async function ambilMateri() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/materi`);

  if (!res.ok) {
    throw new Error("Gagal mengambil data materi");
  }

  return res.json();
}