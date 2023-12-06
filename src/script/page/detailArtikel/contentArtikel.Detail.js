import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const contentArtikelDetail = (id) => {
  const content = document.querySelector('.box-2-1-detail-artikel');
  DataSource.getItmes(dataEndPoint.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Artikel[id].deskripsi;
      allTeam.forEach((element) => {
        content.innerHTML += `<p>${element}</p>`;
      });
    });
};

export default contentArtikelDetail;