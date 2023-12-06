import risetPages from '../../utils/risetPage';

const formGaleri = () => {
  const projectFormGaleri = document.querySelector('.content-project');
  projectFormGaleri.innerHTML = `            
  <div class="container-form-upload-galeri">
    <form>
        <h1>Unggah Karya Anda</h1>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nama Karya</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" required>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Deskripsi</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
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

export default formGaleri;