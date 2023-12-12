import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';
import detailGaleri from './detailGaleri.js';
import authGaleri from '../../utils/authGaleri';

const itemsGaleri = () => {
  const boxItemsGaleri = document.querySelector('.galeri-box2');
  boxItemsGaleri.innerHTML = `
    <div class="judul-galeri"><h2>Galeri Seni Indonesia</h2></div>
    <div class="tambah-galeri"><a class="btn-upload-galeri"><i class="fa-solid fa-cloud-arrow-up"></i>Unggah Galeri</a></div>
    <div class="container-item-galeri"></div>`;
  const container = document.querySelector('.container-item-galeri');
  DataSource.getItmes(dataEndPoint.GALERI)
    .then((response) => response.json())
    .then((data) => {
      const items = data.data;
      items.forEach((element) => {
        const newItem = document.createElement('div');
        newItem.classList.add('item-galeri');
        const newImage = document.createElement('img');
        newImage.src = element.gambar_gallery;
        newImage.alt = '';
        newItem.appendChild(newImage);
        container.appendChild(newItem);
        newItem.onclick = () => {
          window.location.hash = `#detailGaleri/${element.id}`;
          detailGaleri();
        };
      });
    });
  authGaleri();
};

export default itemsGaleri;