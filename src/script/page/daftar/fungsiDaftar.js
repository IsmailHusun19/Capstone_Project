const fungsiDaftar = async () => {
  const form = document.querySelector('.form-login form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Nama"]').value;
    const handphone = form.querySelector('input[placeholder="Handphone"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const password = form.querySelector('input[placeholder="Password"]').value;

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
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
        console.log(data.data.token);
        document.cookie = `token=${data.data.token};path=/`;
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  });
};

export default fungsiDaftar;