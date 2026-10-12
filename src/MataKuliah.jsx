import React from 'react';

function KartuMataKuliah({ nama, kode, sks }) {
  return (
    <article className="kartu-kuliah">
      <h3>{nama}</h3>
      <p>Kode: {kode}</p>
      <p>SKS: {sks}</p>
    </article>
  );
}

function MataKuliah() {
  const daftarKuliah = [
    { id: 1, nama: 'Pemrograman Web', kode: 'IF201', sks: 3 },
    { id: 2, nama: 'Basis Data', kode: 'IF202', sks: 3 },
    { id: 3, nama: 'Struktur Data', kode: 'IF203', sks: 3 },
    { id: 4, nama: 'Jaringan Komputer', kode: 'IF204', sks: 3 }
  ];

  return (
    <section className="kartu">
      <h2>Daftar Mata Kuliah</h2>
      <div className="daftar-kartu">
        {daftarKuliah.map((kuliah) => (
          <KartuMataKuliah
            key={kuliah.id}
            nama={kuliah.nama}
            kode={kuliah.kode}
            sks={kuliah.sks}
          />
        ))}
      </div>
    </section>
  );
}

export default MataKuliah;
