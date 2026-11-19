import pool from "./db.js";

async function cekKoneksi() {
  try {
    const [rows] = await pool.query(
      "SELECT VERSION() AS versi, DATABASE() AS db"
    );

    console.log("Koneksi database berhasil!");
    console.log("Versi MySQL:", rows[0].versi);
    console.log("Nama database:", rows[0].db);
  } catch (error) {
    console.error("Koneksi database gagal!");
    console.error("Kode error:", error.code);
    console.error("Pesan:", error.message);
  } finally {
    await pool.end();
  }
}

cekKoneksi();