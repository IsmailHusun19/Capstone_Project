import risetPages from '../../utils/risetPage';
import formLogin from './formLogin';

const login = () => {
  const contentLogin = document.querySelector('.content-project');
  risetPages();
  contentLogin.innerHTML = `
    <div class="container-login-daftar">
        <div class="container-box-login-daftar">
            <div class="container-form" id="form-login">
                <div class="judul-login-daftar">
                    <h1>Hai, Selamat Datang!</h1>
                    <p>PENTAS SENI INDONESIA</p>
                </div>
                <div class="form-login">
                    <form action=""></form>
                    <div class="login-with">
                        <p class="google"><img src="../../../src/public/aset/login-section/google.webp" alt=""><a href="?#login">Login dengan <span>Google</span></a></p>
                        <p class="facebook"> <img src="../../../src/public/aset/login-section/facebook.webp" alt=""><a href="?#login">Login dengan <span>Facebook</span></a></p>
                    </div>
                </div>
            </div>
            <div class="gambar-login-daftar" id="#form-login">
                <div class="container-gambar-login-daftar">
                    <div class="box-1"><img src="../../../../src/public/aset/login-section/Hobbies.webp" alt=""></div>
                </div>
            </div>
        </div>
    </div>`;
  formLogin();
};

export default login;
