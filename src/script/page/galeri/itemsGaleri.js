const itemsGaleri = () => {
  const boxItemsGaleri = document.querySelector('.galeri-box2');
  boxItemsGaleri.innerHTML = `
    <div class="judul-galeri"><h2>Galeri Seni Indonesia</h2></div>
      <div class="tambah-galeri"><a href="#formGaleri"><i class="fa-solid fa-cloud-arrow-up"></i>Unggah Galeri</a></div>
      <div class="container-item-galeri">
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/1.png" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/2.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/3.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/4.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/1.png" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/2.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/3.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/4.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/1.png" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/2.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/3.jpg" alt=""></div>
        <div class="item-galeri"><img src="../../../../src/public/aset/galeri/item/4.jpg" alt=""></div>
    </div>`;
};

export default itemsGaleri;