import axios from "axios";
import { endpoint } from './../config/devConfig';

class RestfulProvider {

  constructor() {
    if (localStorage.getItem('user')) {
      // this.setCommonHeaders()
    }
  }

  setCommonHeaders = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    // axios.defaults.headers.common['Authorization'] = `Bearer 1234567890puiitury`;
  };

  get = (url, headers) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${endpoint}/${url}`, headers)
        .then(res => resolve(res.data))
        .catch(error => {
          reject(error);
        });
    });
  };

  post = (url, data) => {
    // if (localStorage.getItem('user')) {
    //   this.setCommonHeaders()
    // }
    return new Promise((resolve, reject) => {
      axios
        .post(`${endpoint}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  put = (url, data) => {
    // this.setCommonHeaders();
    return new Promise((resolve, reject) => {
      axios
        .put(`${endpoint}/${url}`, data)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  delete = url => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${endpoint}/${url}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
}

export default new RestfulProvider();
