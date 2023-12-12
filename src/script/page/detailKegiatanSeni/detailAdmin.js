const admin = (elementBtnHapus, idKegiatan, kegiatan) => {
  const tokenCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('role='));
  const isTokenExist = tokenCookie !== undefined;

  if (isTokenExist && tokenCookie.split('=')[1] === '2') {
    console.log(tokenCookie);
    elementBtnHapus.innerHTML = '<button class="btnHapusKegiatan" type="button">Hapus Kegiatan</button>';
    const btnHapus = elementBtnHapus.querySelector('button');

    btnHapus.addEventListener('click', () => {
      fetch(`https://dokumentasi.pentas-seniid.my.id/${kegiatan}/${idKegiatan}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          swal({
            title: 'Success',
            text: `Hapus ${kegiatan} berhasil!`,
            icon: 'success',
            button: 'OK'
          }).then(() => {
            window.location.href = `/#${kegiatan}`;
          });
        })
        .catch((error) => {
          swal({
            title: 'Gagal',
            text: `Hapus ${kegiatan} gagal!`,
            icon: 'error',
            button: 'OK'
          }).then(() => {
            window.location.href = `/#${kegiatan}`;
          });
        });
    });
  } else {
    elementBtnHapus.innerHTML = '';
  }
};

export default admin;
