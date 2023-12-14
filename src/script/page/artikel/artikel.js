import risetPages from '../../utils/risetPage';
import headerArtikel from './headerArtikel';
import itemArtikel from './itemArtikel';

const artikel = () => {
  risetPages();
  const contentArtikel = document.querySelector('.content-project');
  contentArtikel.innerHTML = `
    <div class="content-project-artikel">
    <div class="container-artikel"></div>
        <div class="container-content-artikel">
            <div class="box-2-artikel">
                <div class="box-2-1-artikel"><p>Breaking News</p></div>
                <div class="box-2-2-artikel"><p>Seni Indonesia</p></div>
            </div>
        </div>
        <div class="item-artikel"></div>
    </div>`;
  headerArtikel();
  itemArtikel();
};

export default artikel;