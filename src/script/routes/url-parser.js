import beranda from '../page/beranda/beranda';
import kegiatan from '../page/kegiatan/kegiatan';
import artikel from '../page/artikel/artikel.js';
import detailArtikel from '../page/detailArtikel/detailArtikel';
import formKegiatanSeni from '../page/kegiatan/formKegiatanSeni';
import detail from '../page/detailKegiatanSeni/detailKegiatanSeni';
import aboutUs from '../page/about-us/about-us.js';
import galeri from '../page/galeri/galeri';
import formGaleri from '../page/galeri/formGaleri';
import login from '../page/login/login.js';
import daftar from '../page/daftar/daftar.js';

const URL = () => {
  function handleRoute() {
    const location = window.location.hash;

    switch (location) {
      case '':
        beranda();
        break;
      case '#beranda':
        beranda();
        console.log('Anda berada di halaman utama');
        break;
      case '#kegiatan':
        kegiatan();
        break;
      case '#formKegiatanSeni':
        formKegiatanSeni();
        break;
      case '#artikel':
        artikel();
        break;
      case window.location.hash.startsWith('#detailArtikel'):
        detailArtikel();
        break;
      case '#about-us':
        aboutUs();
        break;
      case '#galeri':
        galeri();
        break;
      case '#formGaleri':
        formGaleri();
        break;
      case '#login':
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
    switch (true) {
      case window.location.hash.includes('#detailArtikel'):
        detailArtikel();
        break;
      default:
        break;
    }
  }
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
};

export default URL;
