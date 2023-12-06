import kegiatan from './kegiatan';

const search = (allKegiatanSeni, renderItems) => {
  const showMoreButton = document.querySelector('#btnSelengkapnya');
  const searchItems = (query) => {
    const boxKegiatan = document.querySelector('.box-kegiatan');
    const searchResults = allKegiatanSeni.filter((element) => element.judul.toLowerCase().includes(query.toLowerCase()));

    if (searchResults.length === 0) {
      boxKegiatan.innerHTML = '<p width = "300px" margin-top = "20px">Tidak ada hasil yang ditemukan.</p>';
      showMoreButton.style.display = 'none';
      document.querySelector('#garis').style.display = 'none';
    } else {
      boxKegiatan.innerHTML = '';
      renderItems(searchResults);
    }
  };

  const BtnSearch = document.getElementById('search');
  const inputSearch = document.getElementById('input');

  BtnSearch.addEventListener('click', () => {
    if (inputSearch.value == '') {
      kegiatan();
    } else {
      const searchText = inputSearch.value;
      searchItems(searchText);
      showMoreButton.style.display = 'none';
      document.querySelector('#garis').style.display = 'none';
    }
  });
};

export default search;
