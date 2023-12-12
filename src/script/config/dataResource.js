class DataSource extends HTMLElement {
  static getItmes(URL) {
    return fetch(URL);
  }

  static getDetailItmes(URL, id) {
    return fetch(URL, id);
  }

  static postData(URL, data) {
    console.log(data);
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}

export default DataSource;