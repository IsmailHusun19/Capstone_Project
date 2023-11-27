const beranda = () => {
  const content = document.querySelector('.content-project');
  const header = document.querySelector('header');
  header.style.height = '100vh';
  header.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../src/public/aset/hero.png')";
  const boxElement = header.querySelector('.box');
  if (!boxElement) {
    header.innerHTML += `
    <div class="box">
    <h1>PENTAS SENI INDONESIA</h1>
    <h1>Membangkitkan Kehidupan Melalui Seni Indonesia yang Abadi, Menyatu dalam Kreativitas, dan Memahami
        Harmoni Budaya</h1>
    <a href="">Tentang Kami <i class="fa-solid fa-arrow-down"></i></a>
    </div>`;
  } else {
    boxElement.innerHTML = `
    <h1>PENTAS SENI INDONESIA</h1>
    <h1>Membangkitkan Kehidupan Melalui Seni Indonesia yang Abadi, Menyatu dalam Kreativitas, dan Memahami
        Harmoni Budaya</h1>
    <a href="">Tentang Kami <i class="fa-solid fa-arrow-down"></i></a>
    `;
  }

  content.innerHTML = `
<div class="content-project-beranda">
<article>
    <h1 class="jadwal">Jadwal Kegiatan</h1>
    <div class="garis"></div>
    <div class="box-kegiatan">
        <div class="item-kegiatan">
            <div class="image-kegiatan"><img src="../../../src/public/aset/item/item1.png" alt=""></div>
            <div class="keteragan-kegiatan">
                <div class="box-judul-lokasi-waktu">
                    <div class="judul-kegiatan">
                        <h2 id="judulKegiatan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            perspiciatis culpa deserunt quis ullam error fugit quasi, recusandae facere dolorum et!
                            Atque exercitationem magni ipsam laborum nesciunt, consequuntur eveniet voluptates.</h2>
                    </div>
                    <div class="lokasi-waktu-kegiatan">
                        <div class="deskripsi">
                            <p>Gedung Teater dgsdhs dsdgsdbs dsdgsdbs dsdg Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum excepturi aliquid exercitationem similique, cum harum
                                suscipit explicabo impedit a esse pariatur quidem, corporis nemo soluta inventore
                                laboriosam error iusto libero?</p>
                        </div>
                        <div class="tanggal">
                            <p>1 November 2023</p>
                            <p>20.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-kegiatan">
            <div class="image-kegiatan"><img src="../../../src/public/aset/item/item2.png" alt=""></div>
            <div class="keteragan-kegiatan">
                <div class="box-judul-lokasi-waktu">
                    <div class="judul-kegiatan">
                        <h2 id="judulKegiatan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            perspiciatis culpa deserunt quis ullam error fugit quasi, recusandae facere dolorum et!
                            Atque exercitationem magni ipsam laborum nesciunt, consequuntur eveniet voluptates.</h2>
                    </div>
                    <div class="lokasi-waktu-kegiatan">
                        <div class="deskripsi">
                            <p>Gedung Teater dgsdhs dsdgsdbs dsdgsdbs dsdg Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum excepturi aliquid exercitationem similique, cum harum
                                suscipit explicabo impedit a esse pariatur quidem, corporis nemo soluta inventore
                                laboriosam error iusto libero?</p>
                        </div>
                        <div class="tanggal">
                            <p>1 November 2023</p>
                            <p>20.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-kegiatan">
            <div class="image-kegiatan"><img src="../../../src/public/aset/item/item2.png" alt=""></div>
            <div class="keteragan-kegiatan">
                <div class="box-judul-lokasi-waktu">
                    <div class="judul-kegiatan">
                        <h2 id="judulKegiatan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            perspiciatis culpa deserunt quis ullam error fugit quasi, recusandae facere dolorum et!
                            Atque exercitationem magni ipsam laborum nesciunt, consequuntur eveniet voluptates.</h2>
                    </div>
                    <div class="lokasi-waktu-kegiatan">
                        <div class="deskripsi">
                            <p>Gedung Teater dgsdhs dsdgsdbs dsdgsdbs dsdg Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum excepturi aliquid exercitationem similique, cum harum
                                suscipit explicabo impedit a esse pariatur quidem, corporis nemo soluta inventore
                                laboriosam error iusto libero?</p>
                        </div>
                        <div class="tanggal">
                            <p>1 November 2023</p>
                            <p>20.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-kegiatan">
            <div class="image-kegiatan"><img src="../../../src/public/aset/item/item1.png" alt=""></div>
            <div class="keteragan-kegiatan">
                <div class="box-judul-lokasi-waktu">
                    <div class="judul-kegiatan">
                        <h2 id="judulKegiatan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            perspiciatis culpa deserunt quis ullam error fugit quasi, recusandae facere dolorum et!
                            Atque exercitationem magni ipsam laborum nesciunt, consequuntur eveniet voluptates.</h2>
                    </div>
                    <div class="lokasi-waktu-kegiatan">
                        <div class="deskripsi">
                            <p>Gedung Teater dgsdhs dsdgsdbs dsdgsdbs dsdg Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum excepturi aliquid exercitationem similique, cum harum
                                suscipit explicabo impedit a esse pariatur quidem, corporis nemo soluta inventore
                                laboriosam error iusto libero?</p>
                        </div>
                        <div class="tanggal">
                            <p>1 November 2023</p>
                            <p>20.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-kegiatan">
            <div class="image-kegiatan"><img src="../../../src/public/aset/item/item1.png" alt=""></div>
            <div class="keteragan-kegiatan">
                <div class="box-judul-lokasi-waktu">
                    <div class="judul-kegiatan">
                        <h2 id="judulKegiatan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            perspiciatis culpa deserunt quis ullam error fugit quasi, recusandae facere dolorum et!
                            Atque exercitationem magni ipsam laborum nesciunt, consequuntur eveniet voluptates.</h2>
                    </div>
                    <div class="lokasi-waktu-kegiatan">
                        <div class="deskripsi">
                            <p>Gedung Teater dgsdhs dsdgsdbs dsdgsdbs dsdg Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum excepturi aliquid exercitationem similique, cum harum
                                suscipit explicabo impedit a esse pariatur quidem, corporis nemo soluta inventore
                                laboriosam error iusto libero?</p>
                        </div>
                        <div class="tanggal">
                            <p>1 November 2023</p>
                            <p>20.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-kegiatan">
            <div class="image-kegiatan"><img src="../../../src/public/aset/item/item3.png" alt=""></div>
            <div class="keteragan-kegiatan">
                <div class="box-judul-lokasi-waktu">
                    <div class="judul-kegiatan">
                        <h2 id="judulKegiatan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            perspiciatis culpa deserunt quis ullam error fugit quasi, recusandae facere dolorum et!
                            Atque exercitationem magni ipsam laborum nesciunt, consequuntur eveniet voluptates.</h2>
                    </div>
                    <div class="lokasi-waktu-kegiatan">
                        <div class="deskripsi">
                            <p>Gedung Teater dgsdhs dsdgsdbs dsdgsdbs dsdg Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum excepturi aliquid exercitationem similique, cum harum
                                suscipit explicabo impedit a esse pariatur quidem, corporis nemo soluta inventore
                                laboriosam error iusto libero?</p>
                        </div>
                        <div class="tanggal">
                            <p>1 November 2023</p>
                            <p>20.00 WIB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="selengkapnya">
        <p><a href="">Selengkapnya</a></p>
    </div>
    <div class="garis"></div>
</article>
<div class="container-galeri">
    <h1 class="judulGaleri">Galeri</h1>
    <div class="garis"></div>
    <p>Ruang yang didedikasikan untuk menampilkan karya seni. Galeri seni dapat berupa institusi publik, swasta, atau nirlaba yang bertujuan untuk memamerkan dan mempromosikan karya seni.</p>
    <div class="box-galeri">
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri1.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri2.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri3.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri4.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri1.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri2.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri3.png" alt=""></div>
        <div class="galeri"><img src="../../../src/public/aset/galeri/galeri4.png" alt=""></div>
    </div>
</div>
<div class="container-tentangKami">
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
</div>
</div>`;
};

export default beranda;