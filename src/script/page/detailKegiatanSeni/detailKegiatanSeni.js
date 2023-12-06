import risetPages from '../../utils/risetPage';
import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const detail = () => {
  risetPages();
  const contentDetail = document.querySelector('.content-project');
  const id = window.location.hash.split('/').pop();
  DataSource.getItmes(dataEndPoint.KEGIATAN_SENI)
    .then((response) => response.json())
    .then((data) => {
      const itemKegiatanSeni = data.JadwalSeni;
      const index = itemKegiatanSeni.findIndex((item) => item.id == id);

      if (index !== -1) {
        const urutanItem = index;
        console.log(`Item dengan ID ${id} ditemukan pada urutan ke-${urutanItem}`);
        contentDetail.innerHTML = `
      <div class="container-detail">
      <div class="detail">
          <div class="gambar-kegiatan"><img src="${itemKegiatanSeni[urutanItem].gambar}" alt=""></div>
          <div class="keterangan-kegiatan">
              <div class="judul-kegiatan"><h2>${itemKegiatanSeni[urutanItem].judul}</h2></div>
              <div class="deskripsi-kegiatan"><p>${itemKegiatanSeni[urutanItem].deskripsi}</p></div>
              <div class="lokasi-kegiatan">Lokasi : <p>${itemKegiatanSeni[urutanItem].lokasi}</p></div>
              <div class="tanggal-kegiatan">Tanggal : <p>${itemKegiatanSeni[urutanItem].tanggal}</p></div>
              <div class="pukul-kegiatan">Pukul : <p>${itemKegiatanSeni[urutanItem].pukul}</p></div>
          </div>
      </div>
    </div>`;
      }
    });
};

export default detail;
