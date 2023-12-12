import risetPages from '../../utils/risetPage';
import fungsiFormKegiatanSeni from './fungsiPOSTData';

const formKegiatanSeni = () => {
  const projectFormKegiatanSeni = document.querySelector('.content-project');
  projectFormKegiatanSeni.innerHTML = `
  <div class="container-form-upload-kegiatan-seni">
    <form>
        <h1>Unggah Kegiatan Seni Anda</h1>
        <div class="form-group">
          <label for="judulKegiatan">Nama Kegiatan</label>
          <input type="text" class="form-control" id="judulKegiatan" required>
        </div>
        <div class="form-group">
          <label for="deskripsi">Deskripsi</label>
          <textarea class="form-control" id="deskripsi" rows="3" required></textarea>
        </div>
        <div class="row">
            <div class="col">
                <label for="formtngl" class="form-label">Tanggal</label>
                <input type="date" class="form-control" id="formtngl" required>
            </div>
            <div class="col">
                <label for="formpukul" class="form-label">Pukul</label>
                <input type="time" class="form-control" id="formpukul" required>
            </div>
        </div>
        <div class="form-group">
            <label for="lokasi">Lokasi</label>
            <input type="text" class="form-control" id="lokasi" required>
          </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Gambar *jpg, png, jpeg*</label>
            <input class="form-control" type="file" id="formFile" name="gambar" required>
        </div>
        <button class="btn btn-primary" type="submit" id="btnSubmit">Unggah</button>
    </form>
  </div>`;
  risetPages();
  fungsiFormKegiatanSeni();
};

export default formKegiatanSeni;
