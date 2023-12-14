const elementKegiatan = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  const header = document.querySelector('header');
  header.style.height = '100vh';
  header.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../src/public/aset/hero.webp')";

  const boxElement = document.createElement('div');
  boxElement.classList.add('box');

  const h1Element1 = document.createElement('h1');
  h1Element1.textContent = 'PENTAS SENI INDONESIA';
  boxElement.appendChild(h1Element1);

  const h1Element2 = document.createElement('h1');
  h1Element2.textContent = 'Membangkitkan Kehidupan Melalui Seni Indonesia yang Abadi, Menyatu dalam Kreativitas, dan Memahami Harmoni Budaya';
  boxElement.appendChild(h1Element2);

  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search');

  const inputElement = document.createElement('input');
  inputElement.setAttribute('id', 'input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', 'Cari kegiatan pentes seni');
  searchDiv.appendChild(inputElement);

  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('id', 'search');
  buttonElement.textContent = 'Cari';
  searchDiv.appendChild(buttonElement);

  boxElement.appendChild(searchDiv);

  const existingBoxElement = header.querySelector('.box');
  if (!existingBoxElement) {
    header.appendChild(boxElement);
  } else {
    header.replaceChild(boxElement, existingBoxElement);
  }
};

export default elementKegiatan;
