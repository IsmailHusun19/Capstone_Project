import risetPages from '../../utils/risetPage';

const formKegiatanSeni = () => {
  const projectFormKegiatanSeni = document.querySelector('.content-project');
  projectFormKegiatanSeni.innerHTML = `
  <div class="container-form-upload-kegiatan-seni">
    <form>
        <h1>Unggah Kegiatan Seni Anda</h1>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nama Kegiatan</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" required>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Deskripsi</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <div class="row">
            <div class="col">
                <label for="formtngl" class="form-label">Tanggal</label>
                <input type="date" class="form-control" id="formtngl">
            </div>
            <div class="col">
                <label for="formpukul" class="form-label">Pukul</label>
                <input type="time" class="form-control" id="formpukul">
            </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Lokasi</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" required>
          </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Gambar *jpg, png, jpeg*</label>
            <input class="form-control" type="file" id="formFile" required>
        </div>
        <button class="btn btn-primary" type="submit">Unggah</button>
    </form>
  </div>`;
  risetPages();
};

export default formKegiatanSeni;