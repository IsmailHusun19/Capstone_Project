const modalBoxGaleri = () => {
  const closeModalBox = () => {
    document.getElementById('btnCloseBoxModal').addEventListener('click', () => {
      document.getElementById('modalBox').classList.remove('modal-box-aktif');
      document.querySelector('.container-modal-box-galeri').classList.remove('container-modal-box-galeri-aktif');
    });
  };

  const galeriKlik = () => {
    const itemGaleri = document.querySelectorAll('.item-galeri');
    itemGaleri.forEach((element) => {
      element.addEventListener('click', () => {
        document.getElementById('modalBox').classList.add('modal-box-aktif');
        document.querySelector('.container-modal-box-galeri').classList.add('container-modal-box-galeri-aktif');
        closeModalBox();
      });
    });
  };
  galeriKlik();
};

export default modalBoxGaleri;