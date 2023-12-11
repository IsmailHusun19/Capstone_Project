import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';
import elementItem from './elementItemKegiatanSeni.js';
import search from './searchKegiatanSeni.js';
import controlItem from './controlItemKegiatanSeni.js';

const kegiatanSeni = () => {
  DataSource.getItmes(dataEndPoint.KEGIATAN_SENI)
    .then((response) => response.json())
    .then((data) => {
      const allKegiatanSeni = data.data;
      function renderItems(items) {
        const currentDate = new Date();
        items.forEach((element) => {
          const tanggalItem = new Date(element.tanggal);
          if (tanggalItem >= currentDate) {
            elementItem(element);
          }
        });
      }
      controlItem(allKegiatanSeni, renderItems);
      search(allKegiatanSeni, renderItems);
    });
};

export default kegiatanSeni;
