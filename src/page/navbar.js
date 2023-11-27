const navBar = () => {
  const navbar = document.querySelector('ul');
  const navbarToggler = document.querySelector('.fa-bars');

  navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarToggler.classList.toggle('fa-bars-staggered');
    console.log('heheh');
  });

  document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isNavbarToggler = event.target === navbarToggler;

    if (!isClickInsideNavbar && !isNavbarToggler) {
      navbar.classList.remove('active');
      navbarToggler.classList.remove('fa-bars-staggered');
    }
  });
};

navBar();

export default navBar;