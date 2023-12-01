const risetPages = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  const header = document.querySelector('header');
  const boxElement = header.querySelector('.box');
  header.style.backgroundImage = 'none';
  header.style.height = 'max-content';
  if (boxElement) {
    boxElement.innerHTML = '';
  }
};

export default risetPages;