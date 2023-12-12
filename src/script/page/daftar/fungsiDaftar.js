const fungsiDaftar = async () => {
  const form = document.querySelector('.form-login form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Nama"]').value;
    const handphone = form.querySelector('input[placeholder="Handphone"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const password = form.querySelector('input[placeholder="Password"]').value;

    try {
      const response = await fetch('https://dokumentasi.pentas-seniid.my.id/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, handphone, email, password
        })
      });

      const data = await response.json();
      if (response.ok) {
        swal({
          title: 'Success',
          text: 'Daftar berhasil!',
          icon: 'success',
          button: 'OK'
        }).then(() => {
          window.location.href = '/?#login';
        });
      } else {
        swal({
          title: 'Gagal',
          text: 'Daftar gagal!',
          icon: 'error',
          button: 'OK'
        });
      }
    } catch (error) {
      swal({
        title: 'Gagal',
        text: 'Daftar gagal!',
        icon: 'error',
        button: 'OK'
      });
    }
  });
};

export default fungsiDaftar;