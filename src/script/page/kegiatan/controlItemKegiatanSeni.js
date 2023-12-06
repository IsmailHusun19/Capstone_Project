const controlItem = (allKegiatanSeni, renderItems) => {
  let displayedItems = 8;
  let totalItems = 0;
  totalItems = allKegiatanSeni.length;
  renderItems(allKegiatanSeni.slice(0, displayedItems));
  const showMoreButton = document.querySelector('#btnSelengkapnya');
  showMoreButton.addEventListener('click', () => {
    displayedItems += 8;
    if (totalItems - displayedItems < 8) {
      renderItems(allKegiatanSeni.slice(displayedItems - 8));
      showMoreButton.style.display = 'none';
      document.querySelector('#garis').style.display = 'none';
    } else {
      renderItems(allKegiatanSeni.slice(displayedItems - 8, displayedItems));
    }
  });
  if (displayedItems >= totalItems) {
    showMoreButton.style.display = 'none';
    document.querySelector('#garis').style.display = 'none';
  }
};

export default controlItem;