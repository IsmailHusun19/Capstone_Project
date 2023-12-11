const DATA_ENDPOINT = {
  KEGIATAN_SENI: 'http://localhost:3000/kegiatan',
  GALERI: 'http://localhost:3000/gallery',
  DETAIL_GALERI: (id) => `http://localhost:3000/gallery/${id}`,
  TEAM: '../../../src/public/data/team.json',
  ARTIKEL: '../../../src/public/data/artikel.json',

};

export default DATA_ENDPOINT;
