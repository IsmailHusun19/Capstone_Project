const login = () => {
  const contentLogin = document.querySelector('.content-project');
  const header = document.querySelector('header');
  const boxElement = header.querySelector('.box');
  header.style.backgroundImage = 'none';
  header.style.height = 'max-content';
  if (boxElement) {
    boxElement.innerHTML = '';
  }
  contentLogin.innerHTML = `
  <div class="container-login-daftar">
  <div class="container-box-login-daftar">
      <div class="container-form" id="form-login">
          <div class="judul-login-daftar">
              <h1>Hai, Selamat Datang!</h1>
              <p>PENTAS SENI INDONESIA</p>
          </div>
          <div class="form-login">
              <form action="">
                  <div class="email">
                      <div class="input-email">
                          <input type="email" placeholder="Email" required>
                          <div class="simbol-email">
                              <i class="fa-regular fa-user" ></i>
                          </div>
                      </div>
                  </div>
                  <div class="password">
                      <div class="input-password">
                          <input type="password" placeholder="Password" required>
                          <div class="simbol-password">
                              <i class="fa-solid fa-lock" aria-describedby="passwordHelpInline"class="form-control"></i>
                          </div>
                      </div>
                  </div>
                  <div class="login">
                      <button type="submit">Masuk</button>
                      <p class="daftar">Belum punya akun? <a href="#daftar">Daftar</a></p>
                  </div>
              </form>
              <div class="login-with">
                  <p class="google"><img src="../../../src/public/aset/login-section/google.png" alt=""><a href="">Login dengan <span>Google</span></a></p>
                  <p class="facebook"> <img src="../../../src/public/aset/login-section/facebook.png" alt=""><a href="">Login dengan <span>Facebook</span></a></p>
              </div>
          </div>
      </div>
      <div class="gambar-login-daftar" id="#form-login">
          <div class="container-gambar-login-daftar">
              <div class="box-1"><img src="../../../src/public/aset/login-section/Hobbies.png" alt=""></div>
          </div>
      </div>
  </div>
</div>`;
};

export default login;
