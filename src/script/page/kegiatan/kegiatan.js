import kegiatanSeni from './itemKegiatan';
import elementKegiatan from './elementKegiatan';
import authKegiatan from '../../utils/authKegiatan';

const kegiatan = () => {
  const content = document.querySelector('.content-project');
  content.innerHTML = `
    <div class="content-project-kegiatan">
        <article>
            <h1 class="jadwal">Jadwal Kegiatan</h1>
            <div class="garis"></div>
            <div class="tambah-galeri"><a class="btn-upload-kegiatan"><i class="fa-solid fa-cloud-arrow-up"></i>Unggah Pentas Seni</a></div>
            <div class="box-kegiatan"></div>
        </article>
    </div>`;
  const article = content.querySelector('article');
  const selengkapnyaDiv = document.createElement('div');
  selengkapnyaDiv.classList.add('selengkapnya');
  selengkapnyaDiv.innerHTML = '<p id="btnSelengkapnya">Selengkapnya</p>';
  article.appendChild(selengkapnyaDiv);
  const garisDiv = document.createElement('div');
  garisDiv.id = 'garis';
  garisDiv.classList.add('garis');
  article.appendChild(garisDiv);
  kegiatanSeni();
  elementKegiatan();
  authKegiatan();
};

export default kegiatan;
