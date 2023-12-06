import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';
import elementItem from './elementItemKegiatanSeni.js';
import search from './searchKegiatanSeni.js';
import controlItem from './controlItemKegiatanSeni.js';

const kegiatanSeni = () => {
  DataSource.getItmes(dataEndPoint.KEGIATAN_SENI)
    .then((response) => response.json())
    .then((data) => {
      const allKegiatanSeni = data.JadwalSeni;
      function renderItems(items) {
        items.forEach((element) => {
          if (element.status !== false) {
            elementItem(element);
          }
        });
      }
      controlItem(allKegiatanSeni, renderItems);
      search(allKegiatanSeni, renderItems);
    });
};

export default kegiatanSeni;
