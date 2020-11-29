const axios = require('axios');

class AxiosRepository {
  _axiosInstance;

  constructor(url, headers = {}) {
    this._axiosInstance = axios.create({
      baseURL: url,
      headers
    });
  }

  _handleRequest(request) {
    return request
      .then(({data}) => data)
      .catch((err) => {
        const { status, statusText } = err.response;
        const { message } = err.response.data;

        if (status) {
          console.error({ status, message, statusText });

          return Promise.reject({ status, message, statusText });
        } else {
          console.error(err);

          return Promise.reject(err);
        }
      });
  }

  get(endpoint = '', headers = {}) {

    return this._handleRequest(this._axiosInstance.get(endpoint, { headers }));
  }

  post(endpoint = '', data, headers = {}) {

    return this._handleRequest(this._axiosInstance.post(endpoint, data, { headers }));
  }
}

module.exports = { AxiosRepository };
