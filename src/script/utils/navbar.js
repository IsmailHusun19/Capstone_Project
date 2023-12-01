const navBar = () => {
  const navbar = document.querySelector('ul');
  const navbarToggler = document.querySelector('.fa-bars');

  navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarToggler.classList.toggle('fa-bars-staggered');
  });

  document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isNavbarToggler = event.target === navbarToggler;

    if (!isClickInsideNavbar && !isNavbarToggler) {
      navbar.classList.remove('active');
      navbarToggler.classList.remove('fa-bars-staggered');
    }
  });
  const links = navbar.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      navbarToggler.classList.remove('fa-bars-staggered');
    });
  });
};

export default navBar;
