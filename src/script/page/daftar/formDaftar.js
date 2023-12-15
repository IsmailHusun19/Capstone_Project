import fungsiDaftar from './fungsiDaftar';

const formDaftar = () => {
  const form = document.querySelector('.form-login');
  form.innerHTML = `
    <form action="">
        <div class="email">
            <div class="input-email">
                <input type="text" placeholder="Nama" required>
                <div class="simbol-email">
                    <i class="fa-regular fa-user"></i>
                </div>
            </div>
        </div>
        <div class="password">
            <div class="input-password">
                <input type="number" placeholder="Handphone" required>
                <div class="simbol-password">
                    <i class="fa-solid fa-phone"></i>
                </div>
            </div>
        </div>
        <div class="password">
            <div class="input-password">
                <input type="email" placeholder="Email" autocomplete="email" required>
                <div class="simbol-password">
                <i class="fa-regular fa-envelope"></i>
                </div>
            </div>
        </div>
        <div class="password">
            <div class="input-password">
                <input type="password" placeholder="Password" autocomplete="current-password" required>
                <div class="simbol-password">
                    <i class="fa-solid fa-lock" aria-describedby="passwordHelpInline"class="form-control"></i>
                </div>
            </div>
        </div>
        <div class="login" id="daftar">
            <button type="submit">Daftar</button>
            <p class="daftar">Sudah punya akun? <a href="#login">Masuk</a></p>
        </div>
        <div class="login-with" id="daftar">
            <p class="google"><img id="img-daftar" src="../../../src/public/aset/login-section/google.webp" alt=""><a href="#daftar">Login dengan <span>Google</span></a></p>
            <p class="facebook"> <img id="img-daftar" src="../../../src/public/aset/login-section/facebook.webp" alt=""><a href="#daftar">Login dengan <span>Facebook</span></a></p>
        </div>
    </form>`;
  fungsiDaftar();
};

export default formDaftar;