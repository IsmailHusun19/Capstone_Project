const authProfile = () => {
  const checkTokenCookie = () => {
    const tokenCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('token='));
    return tokenCookie !== undefined;
  };
  const profile = document.querySelectorAll('.btn-profile');
  const url = (page1, login) => {
    const redirectPage = checkTokenCookie() ? login : page1;
    window.location.href = redirectPage;
  };

  const pagesProfile = () => {
    profile.forEach((element) => {
      element.addEventListener('click', () => {
        url('?#login', '#profile');
      });
    });
  };

  const URLCek = (page1, page2, page3) => {
    const queryString = window.location.search;
    const { hash } = window.location;

    function isProfileInURL() {
      return hash === page1 || queryString.includes(page2) || queryString.includes(page3);
    }

    if (isProfileInURL()) {
      url('?#login', '#profile');
    }
  };

  URLCek('#profile', '?#profile', '&profile');
  pagesProfile();
};

export default authProfile;
