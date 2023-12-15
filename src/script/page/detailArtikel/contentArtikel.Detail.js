import DataSource from '../../config/dataResource.js';
import DATA_ENDPOINT from '../../config/dataEndPoint.js';

const contentArtikelDetail = (id) => {
  const content = document.querySelector('.box-2-1-detail-artikel');
  DataSource.getItmes(DATA_ENDPOINT.ARTIKEL)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Artikel;
      allTeam.forEach((element) => {
        if (element.id == id) {
          const deskripsiArray = element.deskripsi;
          deskripsiArray.forEach((deskripsi) => {
            const paragraph = document.createElement('p');
            paragraph.textContent = deskripsi;
            content.appendChild(paragraph);
          });

          const sumber = document.createElement('div');
          sumber.innerHTML = `<p style="font-weight: 500;">Sumber Artikel <a href="${element.sumber}" target="_blank">Link</a></p>`;
          content.appendChild(sumber);
        }
      });
    });
};

export default contentArtikelDetail;
