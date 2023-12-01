import risetPages from '../../utils/risetPage';
import formDaftar from './formDaftar.js';

const daftar = () => {
  const contentDaftar = document.querySelector('.content-project');
  risetPages();
  contentDaftar.innerHTML = `
    <div class="container-login-daftar">
        <div class="container-box-login-daftar">
            <div class="container-form" id="form-daftar">
                <div class="judul-login-daftar">
                    <h1 class="daftar">Hai, Selamat Datang!</h1>
                    <p class="daftar">PENTAS SENI INDONESIA</p>
                </div>
                <div class="form-login"></div>
            </div>
            <div class="gambar-login-daftar" id="gambar-daftar">
                <div class="container-gambar-login-daftar">
                    <div class="box-1"><img src="../../../src/public/aset/login-section/Hobbies.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>`;
  formDaftar();
};

export default daftar;
