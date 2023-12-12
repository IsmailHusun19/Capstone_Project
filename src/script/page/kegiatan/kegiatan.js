import kegiatanSeni from './itemKegiatan';
import elementKegiatan from './elementKegiatan';
import navbar from '../../utils/navbar';
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
            <div class="selengkapnya">
                <p id="btnSelengkapnya">Selengkapnya</p>
            </div>
            <div id="garis" class="garis"></div>
        </article>
    </div>`;
  kegiatanSeni();
  elementKegiatan();
  navbar();
  authKegiatan();
};

export default kegiatan;
