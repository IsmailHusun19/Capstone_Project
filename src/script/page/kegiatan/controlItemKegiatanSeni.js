const controlItem = (allKegiatanSeni, renderItems) => {
  let displayedItems = 8;
  let totalItems = 0;
  totalItems = allKegiatanSeni.length;
  const currentDate = new Date();
  const filteredItems = allKegiatanSeni.filter((item) => {
    const itemDate = new Date(item.tanggal);
    return itemDate >= currentDate;
  });
  totalItems = filteredItems.length;
  renderItems(filteredItems.slice(0, displayedItems));
  const showMoreButton = document.querySelector('#btnSelengkapnya');
  showMoreButton.addEventListener('click', () => {
    displayedItems += 8;
    if (totalItems - displayedItems < 8) {
      renderItems(filteredItems.slice(displayedItems - 8));
      showMoreButton.style.display = 'none';
      document.querySelector('#garis').style.display = 'none';
    } else {
      renderItems(filteredItems.slice(displayedItems - 8, displayedItems));
    }
  });
  if (displayedItems >= totalItems) {
    showMoreButton.style.display = 'none';
    document.querySelector('#garis').style.display = 'none';
  }
};

export default controlItem;
