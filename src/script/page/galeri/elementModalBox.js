const elementModalBoxGaleri = () => {
  const ElemetBoxModal = document.querySelector('.container-modal-box-galeri');
  ElemetBoxModal.innerHTML = `
     <div class="modal-box-galeri" id="modalBox">
        <div class="gambar-modal-box"><img src="../../../../src/public/aset/galeri/item/1.png" alt=""></div>
        <div class="keterangan-modal-box">
            <h1>ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore pariatur earum vitae ullam ipsa suscipit sunt voluptatum nesciunt corrupti.</p>
            <div class="pecipta-karya">
                <p>Pecipta :</p>
                <p>Dadang Surahmat</p>
            </div>
            <p class="tanggal-modal-box">7 November 2023</p>
            <button id="btnCloseBoxModal">Tutup</button>
        </div>
    </div>`;
};

export default elementModalBoxGaleri;