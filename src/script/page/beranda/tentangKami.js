const tentangKami = () => {
  const content = document.querySelector('.content-project');
  const boxTentangKamiBeranda = content.querySelector('.container-tentangKami');
  boxTentangKamiBeranda.innerHTML = `
    <h1 class="judulTentangKami">Tentang Kami</h1>
    <div class="garis"></div>
    <div class="tentang-kami">
        <p>Selamat datang di Pentas Seni ID, panggung digital yang menggambarkan keindahan dan kekayaan seni
            Indonesia.</p>
        <p>Visi kami adalah menjadi destinasi unggulan yang menyajikan jadwal seni terkini, galeri visual yang
            memukau, dan artikel mendalam tentang seni Indonesia. Kami menjadi panggung virtual yang mempromosikan
            kekayaan seni dari berbagai daerah, menyediakan wawasan yang dalam mengenai karya-karya, dan membuka
            kesempatan bagi pencinta seni untuk terhubung dengan ekspresi budaya Indonesia yang memikat dan
            inspiratif.</p>
        <p>Misi Kami untuk menjadi sumber utama jadwal seni, galeri visual, dan artikel tentang seni Indonesia.
            Melalui penyajian yang mendalam, kami mendorong pemahaman yang lebih luas tentang kekayaan seni
            Indonesia, mendukung pertumbuhan seniman lokal, dan memfasilitasi koneksi antara pencinta seni dengan
            keindahan karya artistik yang memukau dari berbagai daerah di Indonesia.</p>
    </div>`;
};
export default tentangKami;