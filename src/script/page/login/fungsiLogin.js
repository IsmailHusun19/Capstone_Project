const fungsiLogin = async (email, password) => {
  try {
    const response = await fetch('https://dokumentasi.pentas-seniid.my.id/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      swal({
        title: 'Success',
        text: 'Login berhasil!',
        icon: 'success',
        button: 'OK'
      }).then(() => {
        window.location.href = '/#beranda';
      });
      const tanggalKedaluwarsa = new Date();
      tanggalKedaluwarsa.setTime(tanggalKedaluwarsa.getTime() + (7 * 24 * 60 * 60 * 1000));
      document.cookie = `token=${data.data.user.id}; expires=${tanggalKedaluwarsa}; path=/`;
      document.cookie = `role=${data.data.user.role_id}; expires=${tanggalKedaluwarsa}; path=/`;
      document.cookie = `name=${data.data.user.name}; expires=${tanggalKedaluwarsa}; path=/`;
    } else {
      swal({
        title: 'Gagal',
        text: 'Login gagal!',
        icon: 'error',
        button: 'OK'
      });
    }
  } catch (error) {
    swal({
      title: 'Gagal',
      text: 'Login gagal!',
      icon: 'error',
      button: 'OK'
    });
  }
};

export default fungsiLogin;
