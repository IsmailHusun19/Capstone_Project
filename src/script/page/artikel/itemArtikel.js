import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const itemArtikel = () => {
  const boxItem = document.querySelector('.item-artikel');
  DataSource.getItmes(dataEndPoint.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Artikel;
      allTeam.forEach((items) => {
        boxItem.innerHTML += `<div class="box-item-artikel">
        <div class="gambar-item-artikel"><img src="${items.gambar}" alt=""></div>
        <div class="keterangan-artikel">
            <div class="judul-item-artikel"><h2>${items.judul}</h2></div>
            <div class="keterangan-item-artikel"><p>${items.deskripsi}</p></div>
        </div>
        <div class="keterangan-lain">
            <p>${items.kota}</p>
            <p><span>${items.waktu}</span></p>
        </div>
    </div>`;
      });
    });
};

export default itemArtikel;