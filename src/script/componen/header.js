const header = () => {
  const elementHeader = document.querySelector('.header');
  elementHeader.innerHTML = `
    <div class="container-nav">
        <div class="navbar">
            <div class="image-logo"><img src="../src/public/aset/logo.png" alt=""></div>
            <i class="fa-solid fa-bars" id=""></i>
            <ul>
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#kegiatan">Kegiatan</a></li>
                <li><a href="#galeri">Galeri</a></li>
                <li><a class='artikel' href="#artikel">Artikel</a></li>
                <li><a href="#tentangKami">Tentang Kami</a></li>
                <li><a href="#daftar">Daftar</a></li>
                <li class="login"><a href="#login">Masuk</a></li>
            </ul>
        </div>
    </div>`;
};

export default header;
