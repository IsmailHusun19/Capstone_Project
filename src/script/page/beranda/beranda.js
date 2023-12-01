import kegiatanSeni from './kegiatan';
import elementBeranda from './elementBeranda';
import galeriBeranda from './galeriBeranda';
import tentangKami from './tentangKami';

const beranda = () => {
  const content = document.querySelector('.content-project');
  elementBeranda();
  content.innerHTML = `
    <div class="content-project-beranda">
        <article>
            <h1 class="jadwal">Jadwal Kegiatan</h1>
            <div class="garis"></div>
            <div class="box-kegiatan"></div>
            <div class="selengkapnya">
                <p id="btnSelengkapnya">Selengkapnya</p>
            </div>
            <div id="garis" class="garis"></div>
        </article>
        <div class="container-galeri"></div>
        <div class="container-tentangKami" id="tentangKami"></div>
    </div>`;
  kegiatanSeni();
  galeriBeranda();
  tentangKami();
};

export default beranda;
