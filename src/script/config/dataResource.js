class DataSource extends HTMLElement {
  static getItmes(URL) {
    return fetch(URL);
  }

  static getDetailItmes(URL, id) {
    return fetch(URL, id);
  }
}

export default DataSource;