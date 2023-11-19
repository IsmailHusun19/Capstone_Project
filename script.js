document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('ul');
    const navbarToggler = document.querySelector('.fa-bars');
  
    navbarToggler.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
      const isClickInsideNavbar = navbar.contains(event.target);
      const isNavbarToggler = (event.target === navbarToggler);
  
      if (!isClickInsideNavbar && !isNavbarToggler) {
        navbar.classList.remove('active');
      }
    });
});


