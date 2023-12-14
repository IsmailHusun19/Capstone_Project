import beranda from '../page/beranda/beranda';
import kegiatan from '../page/kegiatan/kegiatan';
import artikel from '../page/artikel/artikel.js';
import detailArtikel from '../page/detailArtikel/detailArtikel';
import formKegiatanSeni from '../page/kegiatan/formKegiatanSeni';
import detail from '../page/detailKegiatanSeni/detailKegiatanSeni';
import aboutUs from '../page/about-us/about-us.js';
import galeri from '../page/galeri/galeri';
import detailGaleri from '../page/galeri/detailGaleri';
import formGaleri from '../page/galeri/formGaleri';
import login from '../page/login/login.js';
import daftar from '../page/daftar/daftar.js';
import profile from '../page/profile/profile';
import authGaleri from '../utils/authGaleri';
import authKegiatan from '../utils/authKegiatan';

const URL = () => {
  function handleRoute() {
    const location = window.location.hash;

    switch (location) {
      case '':
        beranda();
        break;
      case '#beranda':
        beranda();
        break;
      case '#kegiatan':
        kegiatan();
        break;
      case '#formKegiatanSeni':
        authKegiatan();
        formKegiatanSeni();
        break;
      case '#artikel':
        artikel();
        break;
      case '#detailArtikel':
        detailArtikel();
        break;
      case '#tentangKami':
        aboutUs();
        break;
      case '#gallery':
        galeri();
        break;
      case '#formGaleri':
        authGaleri();
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
      case '#profile':
        profile();
        break;
      default:
        break;
    }
    switch (true) {
      case window.location.hash.includes('#detailArtikel'):
        detailArtikel();
        break;
      case window.location.hash.includes('#detailKegiatanSeni'):
        detail();
        break;
      case window.location.hash.includes('#detailGaleri'):
        detailGaleri();
        break;
      default:
        break;
    }
  }
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
};

export default URL;
