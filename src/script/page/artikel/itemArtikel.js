import DataSource from '../../config/dataResource.js';
import DATA_ENDPOINT from '../../config/dataEndPoint.js';
import detailArtikel from '../detailArtikel/detailArtikel.js';
import elementArtikel from './elementItemArtikel.js';

const itemArtikel = () => {
  const boxItem = document.querySelector('.item-artikel');
  DataSource.getItmes(DATA_ENDPOINT.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const dataItems = data.Artikel;
      dataItems.forEach((items) => {
        const newItem = document.createElement('div');
        newItem.classList.add('box-item-artikel');
        newItem.onclick = () => {
          window.location.hash = `#detailArtikel/${items.id}`;
          detailArtikel();
        };
        elementArtikel(boxItem, items, newItem);
      });
    });
};

export default itemArtikel;