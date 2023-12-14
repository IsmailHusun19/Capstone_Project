import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';
import elementItem from './elementItemKegiatanSeni.js';
import search from './searchKegiatanSeni.js';
import controlItem from './controlItemKegiatanSeni.js';

const kegiatanSeni = async () => {
  try {
    const response = await DataSource.getItmes(dataEndPoint.KEGIATAN_SENI);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid data format received');
    }

    let allKegiatanSeni = data.data;
    allKegiatanSeni.sort((a, b) => b.id - a.id);

    function renderValidItems(items) {
      items.forEach((element) => {
        elementItem(element);
      });
    }

    controlItem(allKegiatanSeni, renderValidItems);
    search(allKegiatanSeni, renderValidItems);
  } catch (error) {
  }
};

export default kegiatanSeni;
