const elementItemDetail = (itemDetailArtikelBox, item, itemArtikel) => {
  let gambarArtikel = document.createElement('div');
  gambarArtikel.classList.add('gambar-artikel-lainnya');
  let gambarImg = document.createElement('img');
  gambarImg.setAttribute('src', item.gambar);
  gambarImg.setAttribute('alt', '');
  let keteranganItemDetail = document.createElement('div');
  keteranganItemDetail.classList.add('keterangan-item-detail-arikel-lainnya');
  let judul = document.createElement('h2');
  judul.textContent = item.judul;
  let deskripsi = document.createElement('p');
  deskripsi.textContent = item.deskripsi;
  let kotaTanggalDetail = document.createElement('div');
  kotaTanggalDetail.classList.add('kota-tanggal-detail-artikel-lainnya');
  let kota = document.createElement('p');
  kota.textContent = item.kota;
  let waktu = document.createElement('p');
  let waktuSpan = document.createElement('span');
  waktuSpan.textContent = item.waktu;
  gambarArtikel.appendChild(gambarImg);
  waktu.appendChild(waktuSpan);
  kotaTanggalDetail.appendChild(kota);
  kotaTanggalDetail.appendChild(waktu);
  keteranganItemDetail.appendChild(judul);
  keteranganItemDetail.appendChild(deskripsi);
  keteranganItemDetail.appendChild(kotaTanggalDetail);
  itemArtikel.appendChild(gambarArtikel);
  itemArtikel.appendChild(keteranganItemDetail);
  itemDetailArtikelBox.appendChild(itemArtikel);
};

export default elementItemDetail;