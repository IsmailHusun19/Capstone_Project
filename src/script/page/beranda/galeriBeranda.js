const galeriBeranda = () => {
  const content = document.querySelector('.content-project');
  const boxGaleriBeranda = content.querySelector('.container-galeri');
  boxGaleriBeranda.innerHTML = `
    <h1 class="judulGaleri">Galeri</h1>
    <div class="garis"></div>
    <p>Ruang yang didedikasikan untuk menampilkan karya seni. Galeri seni dapat berupa institusi publik, swasta, atau nirlaba yang bertujuan untuk memamerkan dan mempromosikan karya seni.</p>
    <div class="box-galeri">
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri1.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri2.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri3.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri4.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri1.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri2.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri3.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri4.png" alt=""></div>
    </div>`;
};

export default galeriBeranda;