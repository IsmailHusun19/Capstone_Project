const fungsiFormGaleri = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const namaKarya = document.getElementById('namaKarya').value;
    const namaPecipta = document.getElementById('namaPecipta').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const tanggal = document.getElementById('tanggalCipta').value;
    const gambar = document.getElementById('formFile').files[0];

    const formData = new FormData();
    formData.append('judul', namaKarya);
    formData.append('pencipta', namaPecipta);
    formData.append('deskripsi', deskripsi);
    formData.append('tanggal_cipta', tanggal);
    formData.append('gambar_gallery', gambar);

    try {
      const response = await fetch('http://localhost:3000/gallery', {
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
          window.location.href = '/#galeri';
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

export default fungsiFormGaleri;