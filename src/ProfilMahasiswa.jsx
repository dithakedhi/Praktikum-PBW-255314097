import React from 'react';

function ProfilMahasiswa({ nama, nim, prodi }) {
  return (
    <section className="kartu">
      <h2>Profil Mahasiswa</h2>
      <p>Nama: {nama}</p>
      <p>NIM: {nim}</p>
      <p>Program Studi: {prodi}</p>
    </section>
  );
}

export default ProfilMahasiswa;
