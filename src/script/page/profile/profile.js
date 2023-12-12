import risetPages from '../../utils/risetPage';
import authProfile from '../../utils/authProfile';
import logout from '../../utils/logout';
import dataProfile from './dataProfile';

const profile = () => {
  risetPages();
  const contentProfile = document.querySelector('.content-project');
  contentProfile.innerHTML = `
  <div class="detail-profile">
<div class="page-profile">
    <h1>Profile</h1>
    <form class="row g-3">
        <div class="col-12">
          <label for="inputAddress" class="form-label">Name</label>
            <input id="nama" type="text" class="form-control" placeholder="Name" aria-label="Name" disabled>
        </div>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" autocomplete="email" disabled>
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Telephone</label>
              <input id="noHp" type="number" class="form-control" placeholder="Telephone" aria-label="Telephone" disabled>
          </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Alamat</label>
          <input id="alamat" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" disabled>
        </div>
        <div class="col-12">
            <button id="button-keluar" type="submit" class="btn btn-primary">Keluar</button>
          </div>
      </form>
</div>
</div>`;
  authProfile();
  logout();
  dataProfile();
};

export default profile;