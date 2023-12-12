import DataSource from '../../config/dataResource.js';
import dataEndPoint from '../../config/dataEndPoint.js';

const dataProfile = () => {
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
        console.log(allUsers[urutanItem].id);
        document.getElementById('nama').value = allUsers[urutanItem].name;
        document.getElementById('inputEmail4').value = allUsers[urutanItem].email;
        document.getElementById('noHp').value = allUsers[urutanItem].handphone;
        document.getElementById('alamat').value = allUsers[urutanItem].alamat;
      }
    });
};

export default dataProfile;