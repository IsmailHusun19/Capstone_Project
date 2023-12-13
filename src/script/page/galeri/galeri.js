import risetPages from '../../utils/risetPage';
import itemsGaleri from './itemsGaleri';

const galeri = () => {
  const ProjectGaleri = document.querySelector('.content-project');
  ProjectGaleri.innerHTML = `
    <div class="container-galeri">
        <div class="galeri-box1">
            <div class="gambar-galeri"><img src="../../../../src/public/aset/galeri/hero.webp" alt=""></div>
            <div class="keterangan-galeri">
                <h1>Gelora Kreativitas, Eksplorasi Indah di Galeri Seni Indonesia</h1>
                <p>Selamat datang di Galeri Seni Indonesia, tempat di mana keindahan budaya dan kreativitas berkumpul dalam karya-karya visual yang memukau. Mari jelajahi warisan seni Indonesia yang kaya melalui mata seniman-seniman terkemuka, dan temukan keajaiban dalam setiap sentuhan kreatif mereka. Selamat menikmati perjalanan seni yang menginspirasi di Galeri Seni Indonesia!</p>
            </div>
        </div>
        <div class="galeri-box2"></div>
        <div class="container-modal-box-galeri"></div>
    </div>`;
  risetPages();
  itemsGaleri();
};

export default galeri;