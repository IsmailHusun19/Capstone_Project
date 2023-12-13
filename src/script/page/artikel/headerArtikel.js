const headerArtikel = () => {
  const boxHeader = document.querySelector('.container-artikel');
  boxHeader.innerHTML = `
    <div class="box-artikel">
    <div class="box-1-artikel">
        <div class="gambar-hero-artikel">
            <img src="../../../src/public/aset/artikel/artikel.webp" alt="">
        </div>
        <div class="keterangan-hero">
            <div class="judul-hero-artikel"><h1>Pentas Seni Indonesia Maha Karya Kebudayaan yang Memukau</h1></div>
            <div class="keterangan-hero-artikel"><p>Pentas seni di Indonesia adalah panggung yang mempersembahkan kekayaan dan keindahan budaya yang tumbuh subur di tanah air ini. Sebagai perpaduan harmonis antara tradisi kuno dan keberagaman kontemporer, setiap pertunjukan adalah sebuah kisah hidup yang menjelajahi sejarah, nilai-nilai, dan ekspresi seni yang menggugah perasaan.</p></div>
        </div>
    </div>
    `;
};

export default headerArtikel;