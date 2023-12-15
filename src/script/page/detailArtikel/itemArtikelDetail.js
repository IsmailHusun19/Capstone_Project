import DataSource from '../../config/dataResource.js';
import DATA_ENDPOINT from '../../config/dataEndPoint.js';
import detailArtikel from './detailArtikel.js';

import elementItemDetail from './elementItemDetalArtikel.js';

const itemDetailArtikel = () => {
  const itemDetailArtikelBox = document.querySelector('.box-2-2-detail-artikel');
  DataSource.getItmes(DATA_ENDPOINT.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Artikel;
      const randomItems = getRandomItems(allTeam, 2);
      randomItems.forEach((item) => {
        let itemArtikel = document.createElement('div');
        itemArtikel.classList.add('item-artikel-lainnya');
        itemArtikel.onclick = () => {
          window.location.hash = `#detailArtikel/${item.id}`;
          detailArtikel();
        };
        elementItemDetail(itemDetailArtikelBox, item, itemArtikel);
      });
    });
};

const getRandomItems = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default itemDetailArtikel;
