import header from '../componen/header'; // Memanggil fungsi untuk menginisialisasi header

const logout = () => {
  const btnLogout = document.querySelector('#button-keluar');
  btnLogout.addEventListener('click', () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    header();
  });
};

export default logout;
