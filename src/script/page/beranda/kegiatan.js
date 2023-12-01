import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const kegiatanSeni = () => {
  let displayedItems = 8;
  let totalItems = 0;
  const content = document.querySelector('.content-project');
  DataSource.getItmes(dataEndPoint.KEGIATAN_SENI)
    .then((response) => response.json())
    .then((data) => {
      const allKegiatanSeni = data.JadwalSeni;
      const boxKegiatan = content.querySelector('.box-kegiatan');
      function renderItems(items) {
        items.forEach((element) => {
          if (element.status !== false) {
            const item = document.createElement('div');
            item.classList.add('item-kegiatan');
            const imageKegiatan = document.createElement('div');
            imageKegiatan.classList.add('image-kegiatan');
            const gambar = document.createElement('img');
            gambar.src = element.gambar;
            gambar.alt = '';
            imageKegiatan.appendChild(gambar);
            const keteranganKegiatan = document.createElement('div');
            keteranganKegiatan.classList.add('keteragan-kegiatan');
            const boxJudulLokasiWaktu = document.createElement('div');
            boxJudulLokasiWaktu.classList.add('box-judul-lokasi-waktu');
            const judulKegiatan = document.createElement('div');
            judulKegiatan.classList.add('judul-kegiatan');
            const judul = document.createElement('h2');
            judul.textContent = element.judul;
            judulKegiatan.appendChild(judul);
            const lokasiWaktuKegiatan = document.createElement('div');
            lokasiWaktuKegiatan.classList.add('lokasi-waktu-kegiatan');
            const deskripsi = document.createElement('div');
            deskripsi.classList.add('deskripsi');
            const deskripsiText = document.createElement('p');
            deskripsiText.textContent = element.deskripsi;
            deskripsi.appendChild(deskripsiText);
            const tanggal = document.createElement('div');
            tanggal.classList.add('tanggal');
            const tanggalText = document.createElement('p');
            tanggalText.textContent = element.tanggal;
            const pukulText = document.createElement('p');
            pukulText.textContent = element.pukul;
            tanggal.appendChild(tanggalText);
            tanggal.appendChild(pukulText);
            lokasiWaktuKegiatan.appendChild(deskripsi);
            lokasiWaktuKegiatan.appendChild(tanggal);
            boxJudulLokasiWaktu.appendChild(judulKegiatan);
            boxJudulLokasiWaktu.appendChild(lokasiWaktuKegiatan);
            keteranganKegiatan.appendChild(boxJudulLokasiWaktu);
            item.appendChild(imageKegiatan);
            item.appendChild(keteranganKegiatan);
            boxKegiatan.appendChild(item);
          }
        });
      }
      totalItems = allKegiatanSeni.length;
      renderItems(allKegiatanSeni.slice(0, displayedItems));
      const showMoreButton = content.querySelector('#btnSelengkapnya');
      showMoreButton.addEventListener('click', () => {
        displayedItems += 8;
        if (totalItems - displayedItems < 8) {
          renderItems(allKegiatanSeni.slice(displayedItems - 8));
          showMoreButton.style.display = 'none';
          content.querySelector('#garis').style.display = 'none';
        } else {
          renderItems(allKegiatanSeni.slice(displayedItems - 8, displayedItems));
        }
      });
      if (displayedItems >= totalItems) {
        showMoreButton.style.display = 'none';
        content.querySelector('#garis').style.display = 'none';
      }
    });
};

export default kegiatanSeni;
