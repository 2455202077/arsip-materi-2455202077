import pool from "./db.js";

export async function semua() {
  const [rows] = await pool.query(
    "SELECT * FROM materi ORDER BY id"
  );

  return rows.map((row) => ({
    id: row.id,
    judul: row.judul,
    mataKuliah: row.mata_kuliah,
    pertemuan: row.pertemuan,
    tautan: row.tautan,
    dibuat: row.dibuat
  }));
}