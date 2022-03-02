import qs from 'qs';
import axios from 'axios'

const CLIENT_ID = '06e525d423f70ae';
const ROUTE_URL = 'https://api.imgur.com';
export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      Response_type: 'token',
    };

    window.location = `${ROUTE_URL}/oauth2/authorize?${qs.stringify(queryString)}`
  },
  fetchImages(token) {
    return axios.get(`${ROUTE_URL}/3/account/me/images`, {
      header: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  uploadImages(images, token) {
    const promises = Array.from(images).map(image=>{
      const formData = new FormData();
      formData.append('image', image);
      return axios.get(`${ROUTE_URL}/3/account/me/images`, formData, {
        header: {
          Authorization: `Bearer ${token}`
        }
      })
    });

    return Promise.all(promises)
  }
}