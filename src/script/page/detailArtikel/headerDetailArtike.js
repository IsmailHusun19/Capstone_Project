import DataSource from '../../config/dataResource.js';
import DATA_ENDPOINT from '../../config/dataEndPoint.js';

const headerDetailArtikel = (id) => {
  const headerDetail = document.querySelector('.box-1-detail-artikel');
  DataSource.getItmes(DATA_ENDPOINT.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const item = data.Artikel[id];
      headerDetail.innerHTML = `<div class="box-1-1-detail-artikel"></div>
        <div class="box-1-2-detail-artikel"></div>
        <div class="box-1-3-detail-artikel">
            <div class="judul-detail-artikel">
                <div class="judul-detail-artikel-2">
                    <h1>${item.judul}</h1>
                </div>
            </div>
            <div class="gambar-detail-artikel"><img src="${item.gambar}" alt=""></div>
            <div class="kota-tanggal-detail-artikel">
                <p>${item.kota}</p>
                <p>${item.waktu}</p>
            </div>
        </div>`;
    });
};

export default headerDetailArtikel;