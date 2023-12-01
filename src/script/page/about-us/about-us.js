import risetPage from '../../utils/risetPage.js';
import headerAbout from './headerAbout.js';
import tentangKami from '../beranda/tentangKami.js';
import team from './team.js';

const aboutUs = () => {
  risetPage();
  const about = document.querySelector('.content-project');
  about.innerHTML = `
    <div class="content-project-about">
      <section class="about"></section>
      <div class="container-tentangKami" style="background-color:transparent; padding: 0;"></div>
      <section class="team"></section>
    </div>`;
  tentangKami();
  headerAbout();
  team();
};

export default aboutUs;
