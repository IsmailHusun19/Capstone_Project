const detail = () => {
  const contentDetail = document.querySelector('.content-project');
  const header = document.querySelector('header');
  const boxElement = header.querySelector('.box');
  header.style.backgroundImage = 'none';
  header.style.height = 'max-content';
  if (boxElement) {
    boxElement.innerHTML = '';
  }
  contentDetail.innerHTML = `
  <div class="container-detail">
  <div class="detail">
      <div class="gambar-kegiatan"><img src="../../../src/public/aset/item/item1.png" alt=""></div>
      <div class="keterangan-kegiatan">
          <div class="judul-kegiatan"><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellat.</h2></div>
          <div class="deskripsi-kegiatan"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab nam voluptate eum accusantium nemo inventore cupiditate illum provident necessitatibus minima corporis nisi dolore unde maxime, dolorum ratione fugit. Aliquam nihil aut eaque mollitia sunt, cupiditate deleniti excepturi quia at quos dolore maiores unde sequi praesentium dolor architecto harum consectetur. Corrupti aut natus provident nulla adipisci amet laudantium suscipit tenetur impedit labore dolore, temporibus maiores consequuntur iste sit id eveniet vitae explicabo maxime! Magnam aperiam inventore recusandae ut iure asperiores reiciendis aut doloribus dolorum distinctio! Reiciendis t</p></div>
          <div class="lokasi-kegiatan">Lokasi : <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div>
          <div class="tanggal-kegiatan">Tanggal : <p>10 November 2023</p></div>
          <div class="pukul-kegiatan">Pukul : <p>10:20 WIB</p></div>
          <div class="btnTandai"><button>Tandai</button></div>
      </div>
  </div>
</div>`;
};

export default detail;
