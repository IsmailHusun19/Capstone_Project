const artikel = () => {
  const contentArtikel = document.querySelector('.content-project');
  const header = document.querySelector('header');
  const boxElement = header.querySelector('.box');
  header.style.backgroundImage = 'none';
  header.style.height = 'max-content';
  if (boxElement) {
    boxElement.innerHTML = '';
  }
  contentArtikel.innerHTML = `
    <div class="content-project-artikel">
    <div class="container-artikel">
        <div class="box-artikel">
            <div class="box-1-artikel">
                <div class="gambar-hero-artikel">
                    <img src="../../../src/public/aset/artikel/artikel.png" alt="">
                </div>
                <div class="keterangan-hero">
                    <div class="judul-hero-artikel"><h1>Pentas Seni Indonesia Maha Karya Kebudayaan yang Memukau</h1></div>
                    <div class="keterangan-hero-artikel"><p>Pentas seni di Indonesia adalah panggung yang mempersembahkan kekayaan dan keindahan budaya yang tumbuh subur di tanah air ini. Sebagai perpaduan harmonis antara tradisi kuno dan keberagaman kontemporer, setiap pertunjukan adalah sebuah kisah hidup yang menjelajahi sejarah, nilai-nilai, dan ekspresi seni yang menggugah perasaan.</p></div>
                </div>
            </div>
        </div>
        <div class="container-content-artikel">
            <div class="box-2-artikel">
                <div class="box-2-1-artikel"><p>Breaking News</p></div>
                <div class="box-2-2-artikel"><p>Seni Indonesia</p></div>
            </div>
        </div>
        <div class="item-artikel">
            <div class="box-item-artikel">
                <div class="gambar-item-artikel"><img src="../../../src/public/aset/artikel/item/1.png" alt=""></div>
                <div class="keterangan-artikel">
                    <div class="judul-item-artikel"><h2>Melodi Visual Masa</h2></div>
                    <div class="keterangan-item-artikel"><p>Perjalanan Eksplorasi Abstrak dalam Lukisan yang Menggambarkan Dinamika Perubahan dan Keanekaragaman Kehidupan Manusia</p></div>
                </div>
                <div class="keterangan-lain">
                    <p>Bandung</p>
                    <p><span>20 novemver 2023</span>|<span>pukul: 10.00</span></p>
                </div>
            </div>
            <div class="box-item-artikel">
                <div class="gambar-item-artikel"><img src="../../../src/public/aset/artikel/item/2.png" alt=""></div>
                <div class="keterangan-artikel">
                    <div class="judul-item-artikel"><h2>Melodi Visual Masa</h2></div>
                    <div class="keterangan-item-artikel"><p>Perjalanan Eksplorasi Abstrak dalam Lukisan yang Menggambarkan Dinamika Perubahan dan Keanekaragaman Kehidupan Manusia</p></div>
                </div>
                <div class="keterangan-lain">
                    <p>Bandung</p>
                    <p><span>20 novemver 2023</span>|<span>pukul: 10.00</span></p>
                </div>
            </div>
            <div class="box-item-artikel">
                <div class="gambar-item-artikel"><img src="../../../src/public/aset/artikel/item/3.png" alt=""></div>
                <div class="keterangan-artikel">
                    <div class="judul-item-artikel"><h2>Melodi Visual Masa</h2></div>
                    <div class="keterangan-item-artikel"><p>Perjalanan Eksplorasi Abstrak dalam Lukisan yang Menggambarkan Dinamika Perubahan dan Keanekaragaman Kehidupan Manusia</p></div>
                </div>
                <div class="keterangan-lain">
                    <p>Bandung</p>
                    <p><span>20 novemver 2023</span>|<span>pukul: 10.00</span></p>
                </div>
            </div>
            <div class="box-item-artikel">
                <div class="gambar-item-artikel"><img src="../../../src/public/aset/artikel/item/1.png" alt=""></div>
                <div class="keterangan-artikel">
                    <div class="judul-item-artikel"><h2>Melodi Visual Masa</h2></div>
                    <div class="keterangan-item-artikel"><p>Perjalanan Eksplorasi Abstrak dalam Lukisan yang Menggambarkan Dinamika Perubahan dan Keanekaragaman Kehidupan Manusia</p></div>
                </div>
                <div class="keterangan-lain">
                    <p>Bandung</p>
                    <p><span>20 novemver 2023</span>|<span>pukul: 10.00</span></p>
                </div>
            </div>
            <div class="box-item-artikel">
                <div class="gambar-item-artikel"><img src="../../../src/public/aset/artikel/item/3.png"" alt=""></div>
                <div class="keterangan-artikel">
                    <div class="judul-item-artikel"><h2>Melodi Visual Masa</h2></div>
                    <div class="keterangan-item-artikel"><p>Perjalanan Eksplorasi Abstrak dalam Lukisan yang Menggambarkan Dinamika Perubahan dan Keanekaragaman Kehidupan Manusia</p></div>
                </div>
                <div class="keterangan-lain">
                    <p>Bandung</p>
                    <p><span>20 novemver 2023</span>|<span>pukul: 10.00</span></p>
                </div>
            </div>
        </div>
    </div>
    </div>`;
};

export default artikel;