import DataSource from '../../config/dataResource.js';
import DATA_ENDPOINT from '../../config/dataEndPoint.js';

const team = () => {
  const elementTeam = document.querySelector('.team');
  elementTeam.innerHTML = `
    <div class="team-title"><h1>This is My Team</h1></div>
    <div class="profile"></div>`;
  DataSource.getItmes(DATA_ENDPOINT.TEAM)
    .then((response) => response.json())
    .then((data) => {
      const allTeam = data.Team;
      const profile = elementTeam.querySelector('.profile');
      allTeam.forEach((items) => {
        profile.innerHTML += `
          <div class="card-profile">
            <div class="img-profile">
                <img src="${items.gambar}" alt="">
            </div>
            <div class="about-profile">
                <div class="detail-profile" style="height:max-content; display: block;">
                    <h2>${items.nama} <br><span>${items.role}</span></h2>
                    <p>${items.univ}</p>
                    <div class="actionBtn">
                        <a href="${items.linked}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="${items.instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="${items.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
          </div>`;
      });
    });
};

export default team;
