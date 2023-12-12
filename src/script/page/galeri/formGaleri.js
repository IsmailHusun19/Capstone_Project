import risetPages from '../../utils/risetPage';
import fungsiFormGaleri from './fungsiPOSTgaleri';

const formGaleri = () => {
  const projectFormGaleri = document.querySelector('.content-project');
  projectFormGaleri.innerHTML = `            
  <div class="container-form-upload-galeri">
    <form>
        <h1>Unggah Karya Anda</h1>
        <div class="form-group">
          <label for="judul">Nama Karya</label>
          <input type="text" class="form-control" id="namaKarya" required>
        </div>
        <div class="form-group">
        <label for="judul">Nama Pecipta</label>
        <input type="text" class="form-control" id="namaPecipta" required>
      </div>
        <div class="form-group">
        <label for="TanggalCipta">Tanggal Cipta</label>
        <input type="date" class="form-control" id="tanggalCipta" required>
      </div>
        <div class="form-group">
          <label for="deskripsi" >Deskripsi</label>
          <textarea class="form-control" id="deskripsi" rows="3" required></textarea>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Gambar *jpg, png, jpeg*</label>
            <input class="form-control" type="file" id="formFile" required>
          </div>
        <button class="btn btn-primary" type="submit">Unggah</button>
      </form>
  </div>`;
  risetPages();
  fungsiFormGaleri();
};

export default formGaleri;