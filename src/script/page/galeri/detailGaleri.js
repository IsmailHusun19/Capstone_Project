import risetPages from '../../utils/risetPage';
import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const detailGaleri = () => {
  risetPages();
  const contentDetail = document.querySelector('.content-project');
  const id = window.location.hash.split('/').pop();
  DataSource.getItmes(dataEndPoint.GALERI)
    .then((response) => response.json())
    .then((data) => {
      const itemGaleri = data.data;
      const index = itemGaleri.findIndex((item) => item.id == id);

      if (index !== -1) {
        const urutanItem = index;
        const tanggalCipta = new Date(itemGaleri[urutanItem].tanggal_cipta);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const tanggalDiciptakan = tanggalCipta.toLocaleDateString('id-ID', options);
        contentDetail.innerHTML = `
      <div class="container-detail">
      <div class="detail">
          <div class="gambar-kegiatan"><img src="${itemGaleri[urutanItem].gambar_gallery}" alt=""></div>
          <div class="keterangan-kegiatan">
              <div class="judul-kegiatan"><h2>${itemGaleri[urutanItem].judul}</h2></div>
              <div class="deskripsi-kegiatan"><p>${itemGaleri[urutanItem].deskripsi}</p></div>
              <div class="lokasi-kegiatan">Pecipta Karya : <p>${itemGaleri[urutanItem].pencipta}</p></div>
              <div class="tanggal-kegiatan">Tanggal Diciptakan : <p>${tanggalDiciptakan}</p></div>
          </div>
      </div>
    </div>`;
      }
    });
};

export default detailGaleri;
