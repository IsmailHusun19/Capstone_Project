import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const headerDetailArtikel = (id) => {
  const headerDetail = document.querySelector('.box-1-detail-artikel');
  DataSource.getItmes(dataEndPoint.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Artikel[id];
      headerDetail.innerHTML = `<div class="box-1-1-detail-artikel"></div>
        <div class="box-1-2-detail-artikel"></div>
        <div class="box-1-3-detail-artikel">
            <div class="judul-detail-artikel">
                <div class="judul-detail-artikel-2">
                    <h1>${allTeam.judul}</h1>
                </div>
            </div>
            <div class="gambar-detail-artikel"><img src="${allTeam.gambar}" alt=""></div>
            <div class="kota-tanggal-detail-artikel">
                <p>${allTeam.kota}</p>
                <p>${allTeam.waktu}</p>
            </div>
        </div>`;
    });
};

export default headerDetailArtikel;