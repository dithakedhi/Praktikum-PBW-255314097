import React from 'react';
import ProfilMahasiswa from './ProfilMahasiswa.jsx';
import MataKuliah from './MataKuliah.jsx';
import PenghitungKehadiran from './PenghitungKehadiran.jsx';
import DaftarTugas from './DaftarTugas.jsx';

function App() {
  const nama = 'Maria Rufina Editha';
  const nim = '255314097';
  const prodi = 'Informatika';

  return (
    <main className="container">
      <h1>Praktikum React</h1>
      <p className="subjudul">
        Implementasi JSX, Props, State, dan localStorage
      </p>

      <ProfilMahasiswa nama={nama} nim={nim} prodi={prodi} />
      <MataKuliah />
      <PenghitungKehadiran />
      <DaftarTugas />
    </main>
  );
}

export default App;
