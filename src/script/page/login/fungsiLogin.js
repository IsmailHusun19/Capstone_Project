const fungsiLogin = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        console.log(sessionStorage.getItem('token'));
      console.log('Login berhasil');
    } else {
      console.log(data.error);
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
};

export default fungsiLogin;
