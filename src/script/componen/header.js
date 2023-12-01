import elementBeranda from '../page/beranda/elementBeranda';

const header = () => {
  const elementHeader = document.querySelector('.header');
  elementHeader.innerHTML = `
    <div class="container-nav">
        <div class="navbar">
            <div class="image-logo"><img src="../src/public/aset/logo.png" alt=""></div>
            <i class="fa-solid fa-bars" id=""></i>
            <ul>
                <li><a href="#home">Beranda</a></li>
                <li><a href="#kegiatan">Kegiatan</a></li>
                <li><a href="">Galeri</a></li>
                <li><a href="#artikel">Artikel</a></li>
                <li><a href="#about-us">Tentang Kami</a></li>
                <li><a href="#daftar">Daftar</a></li>
                <li class="login"><a href="#login">Masuk</a></li>
            </ul>
        </div>
    </div>`;
  elementBeranda();
};

export default header;
