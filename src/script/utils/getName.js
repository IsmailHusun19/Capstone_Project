import DataSource from '../config/dataResource.js';
import dataEndPoint from '../config/dataEndPoint.js';
import header from '../componen/header.js';

const getName = () => {
  DataSource.getItmes(dataEndPoint.ALL_USERS)
    .then((response) => response.json())
    .then((data) => {
      const allUsers = data.data;
      console.log(allUsers);
      function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
      }
      const id = getCookie('token');
      const index = allUsers.findIndex((item) => item.id == id);

      if (index !== -1) {
        const urutanItem = index;
        header(allUsers[urutanItem].name);
      }
    });
};

export default getName;