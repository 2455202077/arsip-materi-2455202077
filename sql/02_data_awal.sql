USE arsip_materi;

INSERT INTO materi (judul, mata_kuliah, pertemuan, tautan)
VALUES
(
    'Pengantar HTML dan CSS',
    'Pemrograman Web',
    1,
    'https://contoh.ac.id/web/p1.pdf'
),
(
    'Dasar JavaScript',
    'Pemrograman Web',
    2,
    'https://contoh.ac.id/web/p2.pdf'
),
(
    'Normalisasi Basis Data',
    'Basis Data',
    5,
    NULL
),
(
    'Yayah Tri Marpuah',
    'Pemrograman Web',
    8,
    NULL
);

SELECT * FROM materi;