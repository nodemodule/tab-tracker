import axios from 'axios';

export default () => { // eslint-disable-line
  return axios.create({
    baseURL: `http://localhost:8081/`,
    // headers: {
    //   Authorization: `Bearer ${store.state.token}`,
    // },
  });
};;
