const headerAbout = () => {
  const about = document.querySelector('.about');
  about.innerHTML = `
    <div class="desc-about" data-aos="fade-right">
        <h1>PENTAS SENI INDONESIA</h1>
        <p>Pentas seni Indonesia adalah refleksi keindahan yang terwujud dalam gerak, suara, dan warna, sebuah pesta rupa untuk jiwa yang haus akan keindahan</p>
    </div>
    <div class="desc-picture" data-aos="fade-left">
        <img src="../../../src/public/aset/about/3d-render.webp" alt="">
    </div>`;
};

export default headerAbout;