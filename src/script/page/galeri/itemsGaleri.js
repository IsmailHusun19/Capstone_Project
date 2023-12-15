import DataSource from '../../config/dataResource.js';
import DATA_ENDPOINT from '../../config/dataEndPoint';
import detailGaleri from './detailGaleri.js';
import authGaleri from '../../utils/authGaleri';

const itemsGaleri = async () => {
  try {
    const boxItemsGaleri = document.querySelector('.galeri-box2');
    boxItemsGaleri.innerHTML = `
      <div class="judul-galeri"><h2>Galeri Seni Indonesia</h2></div>
      <div class="tambah-galeri"><a class="btn-upload-galeri"><i class="fa-solid fa-cloud-arrow-up"></i>Unggah Galeri</a></div>
      <div class="container-item-galeri"></div>`;

    const container = document.querySelector('.container-item-galeri');
    const response = await DataSource.getItmes(DATA_ENDPOINT.GALERI);
    const data = await response.json();

    const items = data.data || [];
    const createGalleryItem = (element) => {
      const newItem = document.createElement('div');
      newItem.classList.add('item-galeri');
      const newImage = document.createElement('img');
      newImage.src = element.gambar_gallery;
      newImage.alt = '';
      newImage.style.backgroundColor = 'white';
      newImage.style.minWidth = '100px';
      newImage.style.minHeight = '100px';
      newItem.appendChild(newImage);
      return newItem;
    };
    items.forEach((element) => {
      const existingItem = container.querySelector(`img[src="${element.gambar_gallery}"]`);

      if (!existingItem) {
        const newItem = createGalleryItem(element);

        // Menambahkan elemen baru ke dalam container di bagian paling atas
        container.prepend(newItem);

        newItem.addEventListener('click', () => {
          window.location.hash = `#detailGaleri/${element.id}`;
          detailGaleri();
        });
      }
    });

    authGaleri();
  } catch (error) {
    console.error('Error fetching gallery items:', error);
  }
};

export default itemsGaleri;
