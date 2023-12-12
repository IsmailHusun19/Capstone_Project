import navBar from '../../utils/navbar';

const elementKegiatan = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  const header = document.querySelector('header');
  header.style.height = '100vh';
  header.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../src/public/aset/hero.png')";
  const boxElement = header.querySelector('.box');
  if (!boxElement) {
    header.innerHTML += `
    <div class="box">
      <h1>PENTAS SENI INDONESIA</h1>
      <h1>Membangkitkan Kehidupan Melalui Seni Indonesia yang Abadi, Menyatu dalam Kreativitas, dan Memahami Harmoni Budaya</h1>
      <div class="search">
        <input id="input" type="text" placeholder="Cari kegiatan pentes seni">
        <button id="search">Cari</button>
      </div>
    </div>`;
  } else {
    boxElement.innerHTML = `
    <h1>PENTAS SENI INDONESIA</h1>
    <h1>Membangkitkan Kehidupan Melalui Seni Indonesia yang Abadi, Menyatu dalam Kreativitas, dan Memahami Harmoni Budaya</h1>
    <div class="search">
      <input id="input" type="text" placeholder="Cari kegiatan pentes seni">
      <button id="search">Cari</button>
    </div>`;
  }
  navBar();
};

export default elementKegiatan;