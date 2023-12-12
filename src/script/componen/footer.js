const footer = () => {
  const elementFooter = document.querySelector('footer');
  elementFooter.innerHTML = `
    <section>
        <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        <img class="logo" src="../src/public/aset/logo.png" alt="">
                    </h6>
                    <p>
                        Temukan keindahan seni, jadwal pentas, galeri kreativitas, dan berbagi karya Anda dengan komunitas yang bersemangat. Bergabunglah dalam perjalanan seni yang tak terlupakan!
                    </p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                        Menu
                    </h6>
                    <p>
                        <a href="#beranda" class="text-reset">Beranda</a>
                    </p>
                    <p>
                        <a href="#kegiatan" class="text-reset">Kegiatan</a>
                    </p>
                    <p>
                        <a href="#gallery" class="text-reset">Gallery</a>
                    </p>
                    <p>
                        <a href="#artikel" class="text-reset">Artikel</a>
                    </p>
                    <p>
                        <a href="#tentangKami" class="text-reset">Tentang Kami</a>
                    </p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">Kontak</h6>
                    <p><i class="fas fa-home me-3"></i> Indonesia</p>
                    <p>
                        <i class="fas fa-envelope me-3"></i>
                        PentasSeniID@gmail.com
                    </p>
                    <p><i class="fas fa-phone me-3"></i> +62 8128278229</p>
                    <p><i class="fas fa-print me-3"></i> +62 8128262292</p>
                </div>
            </div>
        </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        <P class="text-reset">© 2021 Copyright : <span class="fw-bold">Pentas Seni ID</span></P>
    </div>
  `;
};

export default footer;
