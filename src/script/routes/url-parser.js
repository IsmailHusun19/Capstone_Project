import beranda from '../page/beranda/beranda.js';
import artikel from '../page/artikel/artikel.js';
import aboutUs from '../page/about-us/about-us.js';
import login from '../page/login/login.js';
import daftar from '../page/daftar/daftar.js';
import detail from '../page/detail/detailKegiatanSeni.js';

const URL = () => {
  function handleRoute() {
    const location = window.location.hash;

    switch (location) {
      case '':
        beranda();
        break;
      case '#home':
        console.log('Anda berada di halaman utama');
        beranda();
        break;
      case '#artikel':
        console.log('Anda berada di halaman tentang kami');
        artikel();
        break;
      case '#about-us':
        console.log('Anda berada di halaman kontak');
        aboutUs();
        break;
      case '#login':
        console.log('Anda berada di halaman kontak');
        login();
        break;
      case '#daftar':
        daftar();
        break;
      case '#detail':
        detail();
        break;
      default:
        console.log('Halaman tidak ditemukan');
        break;
    }
  }
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
};

export default URL;
