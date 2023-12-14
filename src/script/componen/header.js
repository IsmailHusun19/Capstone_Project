const header = () => {
  const elementHeader = document.querySelector('.header');
  const tokenCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('token='));
  const isTokenExist = tokenCookie !== undefined;
  if (isTokenExist) {
    function getCookie(name) {
      const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
      return cookieValue ? cookieValue.pop() : '';
    }
    elementHeader.innerHTML = `
        <div class="container-nav">
            <div class="navbar">
                <div class="image-logo"><img src="../src/public/aset/logo.webp" alt=""></div>
                <i class="fa-solid fa-bars" id=""></i>
                <ul>
                    <li><a href="#beranda">Beranda</a></li>
                    <li><a href="#kegiatan">Kegiatan</a></li>
                    <li><a href="#gallery">Galeri</a></li>
                    <li><a class='artikel' href="#artikel">Artikel</a></li>
                    <li><a href="#tentangKami">Tentang Kami</a></li>
                    <li class="li-user"><a class="user" href="#profile"><p>${getCookie('name')}</p><i class="fa-solid fa-user"></i></a></li>
                </ul>
            </div>
        </div>`;
  } else {
    elementHeader.innerHTML = `
    <div class="container-nav">
        <div class="navbar">
            <div class="image-logo"><img src="../src/public/aset/logo.webp" alt=""></div>
            <i class="fa-solid fa-bars" id=""></i>
            <ul>
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#kegiatan">Kegiatan</a></li>
                <li><a href="#gallery">Galeri</a></li>
                <li><a class='artikel' href="#artikel">Artikel</a></li>
                <li><a href="#tentangKami">Tentang Kami</a></li>
                <li><a href="#daftar">Daftar</a></li>
                <li class="login"><a href="?#login">Masuk</a></li>
            </ul>
        </div>
    </div>`;
  }
};

export default header;
