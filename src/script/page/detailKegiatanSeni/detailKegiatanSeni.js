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
      const itemKegiatanSeni = data.data;
      const index = itemKegiatanSeni.findIndex((item) => item.id == id);

      if (index !== -1) {
        const urutanItem = index;
        const tanggalCipta = new Date(itemKegiatanSeni[urutanItem].tanggal);
        const dateObj = new Date(tanggalCipta);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('id-ID', options);
        contentDetail.innerHTML = `
      <div class="container-detail">
      <div class="detail">
          <div class="gambar-kegiatan"><img src="${itemKegiatanSeni[urutanItem].gambar_kegiatan}" alt=""></div>
          <div class="keterangan-kegiatan">
              <div class="judul-kegiatan"><h2>${itemKegiatanSeni[urutanItem].judul}</h2></div>
              <div class="deskripsi-kegiatan"><p>${itemKegiatanSeni[urutanItem].description}</p></div>
              <div class="lokasi-kegiatan">Lokasi : <p>${itemKegiatanSeni[urutanItem].alamat}</p></div>
              <div class="tanggal-kegiatan">Tanggal : <p>${formattedDate}</p></div>
              <div class="pukul-kegiatan">Pukul : <p>${itemKegiatanSeni[urutanItem].waktu} WIB</p></div>
          </div>
      </div>
    </div>`;
      }
    });
};

export default detail;
