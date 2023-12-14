const configurasiTambahan = () => {
  const AturTinggiDetailArtikel = () => {
    const childDiv = document.querySelector('.box-1-3-detail-artikel');
    const parentDiv = document.querySelector('.box-1-detail-artikel');
    const heigthChild = childDiv.offsetHeight;
    parentDiv.style.minHeight = `${heigthChild}px`;
  };

  setTimeout(() => {
    AturTinggiDetailArtikel();
  }, 100);
};

export default configurasiTambahan;
