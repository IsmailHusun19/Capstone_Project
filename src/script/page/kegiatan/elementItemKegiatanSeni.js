import detail from '../detailKegiatanSeni/detailKegiatanSeni.js';

const elementItem = (element) => {
  const item = document.createElement('div');
  const boxKegiatan = document.querySelector('.box-kegiatan');
  item.classList.add('item-kegiatan');
  item.onclick = () => {
    window.location.hash = `#detailKegiatanSeni/${element.id}`;
    detail();
  };
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
};

export default elementItem;