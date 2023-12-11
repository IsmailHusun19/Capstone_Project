const fungsiFormKegiatanSeni = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const judulKegiatan = document.getElementById('judulKegiatan').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const tanggal = document.getElementById('formtngl').value;
    const waktu = document.getElementById('formpukul').value;
    const lokasi = document.getElementById('lokasi').value;
    const gambar = document.getElementById('formFile').files[0];

    const formData = new FormData();
    formData.append('judul', judulKegiatan);
    formData.append('description', deskripsi);
    formData.append('tanggal', tanggal);
    formData.append('waktu', waktu);
    formData.append('alamat', lokasi);
    formData.append('gambar_kegiatan', gambar);

    try {
      const response = await fetch('http://localhost:3000/kegiatan', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const responseData = await response.json();
        swal({
          title: 'Success',
          text: 'Data berhasil diunggah!',
          icon: 'success',
          button: 'OK'
        }).then(() => {
          window.location.href = '/#kegiatan';
        });
      } else {
        throw new Error('Gagal melakukan POST');
      }
    } catch (error) {
      swal({
        title: 'Error',
        text: 'Gagal mengunggah data!',
        icon: 'error',
        button: 'OK'
      });
      console.error(error);
    }
  });
};

export default fungsiFormKegiatanSeni;