const DATA_ENDPOINT = {
  KEGIATAN_SENI: 'https://dokumentasi.pentas-seniid.my.id/kegiatan',
  GALERI: 'https://dokumentasi.pentas-seniid.my.id/gallery',
  ALL_USERS: 'https://dokumentasi.pentas-seniid.my.id/auth/users',
  DETAIL_GALERI: (id) => `https://dokumentasi.pentas-seniid.my.id/gallery/${id}`,
  DETAIL_KEGIATAN: (id) => `https://dokumentasi.pentas-seniid.my.id/kegiatan/${id}`,
  TEAM: '../../../src/public/data/team.json',
  ARTIKEL: '../../../src/public/data/artikel.json',

};

export default DATA_ENDPOINT;
