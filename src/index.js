import URL from './script/routes/url-parser.js';
import header from './script/componen/header.js';
import footer from './script/componen/footer.js';
import navBar from './script/utils/navbar.js';
import authGaleri from './script/utils/authGaleri.js';
import authKegiatan from './script/utils/authKegiatan';
import swRegister from './script/utils/sw.js';
import '../src/style/style.css';
import '../src/style/about.css';
import '../src/style/artikel.css';
import '../src/style/card.css';
import '../src/style/login.css';
import '../src/style/daftar.css';
import '../src/style/detail.css';
import '../src/style/beranda.css';
import '../src/style/formKegiatanSeni.css';
import '../src/style/formUploadGaleri.css';
import '../src/style/galeri.css';
import '../src/style/profile.css';
import '../src/style/artikelDetail.css';
import '../src/style/responsive.css';
import './vendor';

header();
footer();
navBar();
URL();
authGaleri();
authKegiatan();

// window.addEventListener('load', async () => {
//   await swRegister();
// });
