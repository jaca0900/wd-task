const { AxiosRepository } = require('../core/axios/axios.repository');
const { StatusAuthenticationRepository } = require('./status-authentication.repository');

class StatusReportRepository extends AxiosRepository {

  constructor() {
    super('https://staging-gateway.priipcloud.com');
    this._statusAuthenticationRepository = new StatusAuthenticationRepository;
  }

  getStatusReports() {

    return this._statusAuthenticationRepository.authenticate()
      .then(response => {
        const { access_token } = response;

        return this.get('/api/v2.0/gateway/reports/status/service', {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json'
        });
      });
  }

  getStatusReport(jobId = '') {

    return this._statusAuthenticationRepository.authenticate()
      .then(response => {
        const { access_token } = response;

        return this.get('/api/v2.0/gateway/reports/status/service/' + jobId, {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/json'
        });
      });
  }
}

module.exports = { StatusReportRepository };
