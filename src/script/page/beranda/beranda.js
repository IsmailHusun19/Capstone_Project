import risetPages from '../../utils/risetPage';

const beranda = () => {
  const projectBeranda = document.querySelector('.content-project');
  projectBeranda.innerHTML = `
   <div class="container-beranda">
    <div class="beranda-header">
        <div class="judul-beranda"data-aos="fade-right">
            <h1>Pentas Seni Indonesia</h1>
            <p>Selamat datang di portal keindahan dan kekayaan seni Indonesia! Di sini, kita menjelajahi pesona yang tiada taranya dari keragaman seni dan budaya yang memikat dari pelosok Nusantara. Melalui galeri yang memukau, artikel yang menginspirasi, dan kalender kegiatan pentas seni yang memukau, mari bersama-sama merayakan warisan kreativitas yang tak ternilai dari Indonesia.</p>
        </div>
        <div class="gambar-beranda" data-aos="fade-left">
            <img src="../../../../src/public/aset/beranda/item/3.webp" alt="">
        </div>
    </div>
    <div class="content-beranda">
        <div class="judul-conten-beranda">
            <h4>Fitur Website Kami</h4>
        </div>
        <div class="content-item-beranda" data-aos="fade-left">
            <div class="box-1-beranda">
                <div class="box-1-1-beranda"><h2>Menyelusuri Seni Indonesia</h2></div>
                <div class="box-1-2-beranda"><p>Dapatkan informasi terbaru mengenai pentas seni terkini di seluruh Indonesia. Dari pertunjukan teater yang mendalam hingga konser musik yang menggugah, kami hadirkan sorotan eksklusif untuk Anda.</p></div>
            </div>
        </div>
        <div class="judul-box-beranda-2" data-aos="fade-right">
            <h1>🎨Galeri</h1>
            <div class="box-2-beranda">
                <div class="box-beranda-2-item">
                    <div class="box-2-1-beranda"><p>Jelajahi koleksi visual yang memukau dari seniman-seniman terkemuka. Kami menyajikan galeri seni daring yang memperlihatkan keindahan dan makna di balik setiap karya.</p></div>
                    <div class="box-2-2-beranda"><img src="../../../../src/public/aset/beranda/item/web-development.webp" alt=""></div>
                </div>
            </div>
        </div>
        <div class="judul-box-beranda-2" data-aos="fade-left">
            <h1>📅Agenda Seni</h1>
            <div class="box-3-beranda">
                <div class="box-beranda-3-item">
                    <div class="box-2-1-beranda"><p style="color: #2e2e2e;">Temukan acara-acara seni yang akan datang di kota Anda. Pantau kalender kami untuk tidak ketinggalan pertunjukan, pameran, dan festival seni yang menarik perhatian.</p></div>
                    <div class="box-2-2-beranda"><img src="../../../../src/public/aset/beranda/item/project-management.webp" alt=""></div>
                </div>
            </div>
        </div>
        <div class="judul-box-beranda-2" data-aos="fade-right">
            <h1>💻Responsif</h1>
            <div class="box-2-beranda">
                <div class="box-beranda-2-item">
                    <div class="box-2-1-beranda"><p>Jelajahi koleksi visual yang memukau dari seniman-seniman terkemuka. Kami menyajikan galeri seni daring yang memperlihatkan keindahan dan makna di balik setiap karya.</p></div>
                    <div class="box-2-2-beranda"><img class="img-3-beranda" src="../../../../src/public/aset/beranda/item/responsive-design.webp" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  risetPages();
};

export default beranda;
