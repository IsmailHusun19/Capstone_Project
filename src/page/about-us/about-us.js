const aboutUs = () => {
  const about = document.querySelector('.content-project');
  const header = document.querySelector('header');
  const boxElement = header.querySelector('.box');
  header.style.backgroundImage = 'none';
  header.style.height = 'max-content';
  if (boxElement) {
    boxElement.innerHTML = '';
  }

  about.innerHTML = `
  <div class="content-project-about">
  <section class="about">
      <div class="desc-about">
          <h1>PENTAS SENI INDONESIA</h1>
          <p>Pentas seni Indonesia adalah refleksi keindahan yang terwujud dalam gerak, suara, dan warna, sebuah pesta rupa untuk jiwa yang haus akan keindahan</p>
      </div>
      <div class="desc-picture">
          <img src="../../../src/public/aset/about/3d-render.png" alt="">
      </div>
  </section>
  <h1 class="judulTentangKami">Tentang Kami</h1>
  <div class="garis"></div>
  <div class="tentang-kami">
      <p>Selamat datang di Pentas Seni ID, panggung digital yang menggambarkan keindahan dan kekayaan seni
          Indonesia.</p>
      <p>Visi kami adalah menjadi destinasi unggulan yang menyajikan jadwal seni terkini, galeri visual yang
          memukau, dan artikel mendalam tentang seni Indonesia. Kami menjadi panggung virtual yang mempromosikan
          kekayaan seni dari berbagai daerah, menyediakan wawasan yang dalam mengenai karya-karya, dan membuka
          kesempatan bagi pencinta seni untuk terhubung dengan ekspresi budaya Indonesia yang memikat dan
          inspiratif.</p>
      <p>Misi Kami untuk menjadi sumber utama jadwal seni, galeri visual, dan artikel tentang seni Indonesia.
          Melalui penyajian yang mendalam, kami mendorong pemahaman yang lebih luas tentang kekayaan seni
          Indonesia, mendukung pertumbuhan seniman lokal, dan memfasilitasi koneksi antara pencinta seni dengan
          keindahan karya artistik yang memukau dari berbagai daerah di Indonesia.</p>
  </div>
  <section class="team">
      <div class="team-title">
          <h1>This is My Team</h1>
      </div>
      <div class="profile">
          <div class="card-profile">
              <div class="img-profile">
                  <img src="../../../src/public/aset/about/foto-pp2.png" alt="">
              </div>
              <div class="about-profile">
                  <div class="detail-profile">
                      <h2>Muhamad Farras Azahry <br><span>Full Stack Web Developer</span></h2>
                      <p>UNIVERSITAS PAMULANG</p>
                      <div class="actionBtn">
                          <a href=""><i class="fa-brands fa-linkedin"></i></a>
                          <a href=""><i class="fa-brands fa-instagram"></i></a>
                          <a href=""><i class="fa-brands fa-github"></i></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="card-profile">
              <div class="img-profile">
                  <img src="../../../src/public/aset/about/foto-pp2.png" alt="">
              </div>
              <div class="about-profile">
                  <div class="detail-profile">
                      <h2>Muhamad Farras Azahry <br><span>Full Stack Web Developer</span></h2>
                      <p>UNIVERSITAS PAMULANG</p>
                      <div class="actionBtn">
                          <a href=""><i class="fa-brands fa-linkedin"></i></a>
                          <a href=""><i class="fa-brands fa-instagram"></i></a>
                          <a href=""><i class="fa-brands fa-github"></i></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="card-profile">
              <div class="img-profile">
                  <img src="../../../src/public/aset/about/foto-pp2.png" alt="">
              </div>
              <div class="about-profile">
                  <div class="detail-profile">
                      <h2>Muhamad Farras Azahry <br><span>Full Stack Web Developer</span></h2>
                      <p>UNIVERSITAS PAMULANG</p>
                      <div class="actionBtn">
                          <a href=""><i class="fa-brands fa-linkedin"></i></a>
                          <a href=""><i class="fa-brands fa-instagram"></i></a>
                          <a href=""><i class="fa-brands fa-github"></i></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="card-profile">
              <div class="img-profile">
                  <img src="../../../src/public/aset/about/foto-pp2.png" alt="">
              </div>
              <div class="about-profile">
                  <div class="detail-profile">
                      <h2>Muhamad Farras Azahry <br><span>Full Stack Web Developer</span></h2>
                      <p>UNIVERSITAS PAMULANG</p>
                      <div class="actionBtn">
                          <a href=""><i class="fa-brands fa-linkedin"></i></a>
                          <a href=""><i class="fa-brands fa-instagram"></i></a>
                          <a href=""><i class="fa-brands fa-github"></i></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="card-profile">
              <div class="img-profile">
                  <img src="../../../src/public/aset/about/foto-pp2.png" alt="">
              </div>
              <div class="about-profile">
                  <div class="detail-profile">
                      <h2>Muhamad Farras Azahry <br><span>Full Stack Web Developer</span></h2>
                      <p>UNIVERSITAS PAMULANG</p>
                      <div class="actionBtn">
                          <a href=""><i class="fa-brands fa-linkedin"></i></a>
                          <a href=""><i class="fa-brands fa-instagram"></i></a>
                          <a href=""><i class="fa-brands fa-github"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</div>`;
};

export default aboutUs;
