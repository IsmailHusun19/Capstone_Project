class DataSource extends HTMLElement {
  static getItmes(URL) {
    return fetch(URL);
  }
}

export default DataSource;