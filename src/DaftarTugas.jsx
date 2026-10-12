import React, { useState, useEffect } from 'react';

const KUNCI_STORAGE = 'daftar-tugas-kuliah';

function bacaTugas() {
  try {
    const data = localStorage.getItem(KUNCI_STORAGE);

    if (data === null) {
      return [];
    }

    const hasil = JSON.parse(data);

    if (!Array.isArray(hasil)) {
      return [];
    }

    return hasil.filter(
      (tugas) =>
        tugas !== null &&
        typeof tugas === 'object' &&
        Number.isSafeInteger(tugas.id) &&
        typeof tugas.judul === 'string' &&
        typeof tugas.selesai === 'boolean'
    );
  } catch (error) {
    return [];
  }
}

function DaftarTugas() {
  // Lazy initializer membaca data hanya saat state pertama dibuat.
  const [daftarTugas, setDaftarTugas] = useState(bacaTugas);
  const [judul, setJudul] = useState('');
  const [filter, setFilter] = useState('Semua');
  const [idEdit, setIdEdit] = useState(null);
  const [pesan, setPesan] = useState('');

  // Menyimpan data ketika daftar tugas berubah.
  useEffect(() => {
    try {
      localStorage.setItem(
        KUNCI_STORAGE,
        JSON.stringify(daftarTugas)
      );
    } catch (error) {
      console.error('Data tugas gagal disimpan:', error);
    }
  }, [daftarTugas]);

  function simpanTugas(e) {
    e.preventDefault();
    const judulBaru = judul.trim();

    if (judulBaru === '') {
      setPesan('Judul tugas tidak boleh kosong.');
      return;
    }

    if (idEdit !== null) {
      setDaftarTugas((daftarSebelumnya) =>
        daftarSebelumnya.map((tugas) =>
          tugas.id === idEdit
            ? { ...tugas, judul: judulBaru }
            : tugas
        )
      );
      setPesan('Judul tugas berhasil diperbarui.');
      setIdEdit(null);
    } else {
      const tugasBaru = {
        id: Date.now(),
        judul: judulBaru,
        selesai: false
      };

      setDaftarTugas((daftarSebelumnya) => [
        ...daftarSebelumnya,
        tugasBaru
      ]);
      setPesan('Tugas berhasil ditambahkan.');
    }

    setJudul('');
  }

  function ubahStatus(id) {
    setDaftarTugas((daftarSebelumnya) =>
      daftarSebelumnya.map((tugas) =>
        tugas.id === id
          ? { ...tugas, selesai: !tugas.selesai }
          : tugas
      )
    );
    setPesan('');
  }

  function mulaiEdit(tugas) {
    setIdEdit(tugas.id);
    setJudul(tugas.judul);
    setPesan('');
  }

  function batalEdit() {
    setIdEdit(null);
    setJudul('');
    setPesan('');
  }

  const tugasDitampilkan = daftarTugas.filter((tugas) => {
    if (filter === 'Aktif') return !tugas.selesai;
    if (filter === 'Selesai') return tugas.selesai;
    return true;
  });

  const jumlahSelesai = daftarTugas.filter(
    (tugas) => tugas.selesai
  ).length;

  return (
    <section className="kartu">
      <h2>Daftar Tugas Kuliah</h2>

      <form onSubmit={simpanTugas}>
        <label htmlFor="judul-tugas">Judul tugas</label>
        <div className="form-tugas">
          <input
            id="judul-tugas"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Contoh: Praktikum React"
          />
          <button type="submit">
            {idEdit !== null ? 'Simpan Edit' : 'Tambah Tugas'}
          </button>
          {idEdit !== null && (
            <button type="button" onClick={batalEdit}>
              Batal
            </button>
          )}
        </div>
      </form>

      {pesan !== '' && (
        <p className="pesan" role="status">{pesan}</p>
      )}

      <h3>Filter Tugas</h3>
      <div className="filter">
        {['Semua', 'Aktif', 'Selesai'].map((kategori) => (
          <button
            key={kategori}
            type="button"
            className={filter === kategori ? 'filter-aktif' : ''}
            aria-pressed={filter === kategori}
            onClick={() => setFilter(kategori)}
          >
            {kategori}
          </button>
        ))}
      </div>

      {tugasDitampilkan.length === 0 ? (
        <p>Belum ada tugas pada kategori ini.</p>
      ) : (
        <ul className="daftar-tugas">
          {tugasDitampilkan.map((tugas) => (
            <li key={tugas.id} className="item-tugas">
              <span className={tugas.selesai ? 'selesai' : ''}>
                {tugas.judul}
              </span>
              <div className="aksi">
                <button
                  type="button"
                  onClick={() => ubahStatus(tugas.id)}
                >
                  {tugas.selesai ? 'Aktifkan' : 'Selesaikan'}
                </button>
                <button
                  type="button"
                  onClick={() => mulaiEdit(tugas)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="ringkasan">
        <p>Total tugas: {daftarTugas.length}</p>
        <p>Tugas aktif: {daftarTugas.length - jumlahSelesai}</p>
        <p>Tugas selesai: {jumlahSelesai}</p>
      </div>
    </section>
  );
}

export default DaftarTugas;
