import React, { useState } from 'react';

function PenghitungKehadiran() {
  const [jumlah, setJumlah] = useState(0);

  function tambah() {
    setJumlah((nilai) => Math.min(30, nilai + 1));
  }

  function kurangi() {
    setJumlah((nilai) => Math.max(0, nilai - 1));
  }

  function reset() {
    setJumlah(0);
  }

  return (
    <section className="kartu">
      <h2>Penghitung Kehadiran</h2>
      <div className="angka-kehadiran">{jumlah}</div>
      <p>Batas nilai: 0 sampai 30</p>
      <div className="aksi">
        <button onClick={kurangi}>Kurangi</button>
        <button onClick={tambah}>Tambah</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

export default PenghitungKehadiran;
