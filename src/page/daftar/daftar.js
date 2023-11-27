const daftar = () => {
  const contentDaftar = document.querySelector('.content-project');
  const header = document.querySelector('header');
  const boxElement = header.querySelector('.box');
  header.style.backgroundImage = 'none';
  header.style.height = 'max-content';
  if (boxElement) {
    boxElement.innerHTML = '';
  }
  contentDaftar.innerHTML = `
  <div class="container-login-daftar">
  <div class="container-box-login-daftar">
      <div class="container-form" id="form-daftar">
          <div class="judul-login-daftar">
              <h1 class="daftar">Hai, Selamat Datang!</h1>
              <p class="daftar">PENTAS SENI INDONESIA</p>
          </div>
          <div class="form-login">
              <form action="">
                  <div class="email">
                      <div class="input-email">
                          <input type="text" placeholder="Nama" required>
                          <div class="simbol-email">
                              <i class="fa-regular fa-user" ></i>
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
                          <input type="email" placeholder="Email" required>
                          <div class="simbol-password">
                              <i class="fa-solid fa-lock" aria-describedby="passwordHelpInline"class="form-control"></i>
                          </div>
                      </div>
                  </div>
                  <div class="password">
                      <div class="input-password">
                          <input type="password" placeholder="Password">
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
                      <p class="google"><img id="img-daftar" src="../../../src/public/aset/login-section/google.png" alt=""><a href="">Login dengan <span>Google</span></a></p>
                      <p class="facebook"> <img id="img-daftar" src="../../../src/public/aset/login-section/facebook.png" alt=""><a href="">Login dengan <span>Facebook</span></a></p>
                  </div>
              </form>
          </div>
      </div>
      <div class="gambar-login-daftar" id="gambar-daftar">
          <div class="container-gambar-login-daftar">
              <div class="box-1"><img src="../../../src/public/aset/login-section/Hobbies.png" alt=""></div>
          </div>
      </div>
  </div>
</div>`;
};

export default daftar;
