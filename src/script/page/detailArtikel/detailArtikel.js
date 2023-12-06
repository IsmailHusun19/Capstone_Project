import risetPages from '../../utils/risetPage';
import configurasiTambahan from './configurasiTambahanDetailArtikel';
import headerDetailArtikel from './headerDetailArtike';
import contentArtikelDetail from './contentArtikel.Detail';
import itemDetailArtikel from './itemArtikelDetail';
import artikel from '../artikel/artikel';

const detailArtikel = () => {
  risetPages();
  const contentDetailArtikel = document.querySelector('.content-project');
  contentDetailArtikel.innerHTML = `
    <div class="container-content-project-detail-artikel">
    <div class="detail-artikel">
        <div class="box-1-detail-artikel"></div>
        <div class="box-2-detail-artikel">
            <div class="box-2-1-detail-artikel"></div>
            <div class="box-2-2-detail-artikel"></div>
        </div>
    </div>
</div>`;
  const id = window.location.hash.split('/').pop();
  console.log(id);
  headerDetailArtikel(id);
  contentArtikelDetail(id);
  itemDetailArtikel();
  document.querySelector('.artikel').addEventListener('click', () => {
    artikel();
  });
  configurasiTambahan();
};

export default detailArtikel;