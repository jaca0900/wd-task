const { AxiosRepository } = require('../core/axios/axios.repository');

class StatusAuthenticationRepository extends AxiosRepository {

  constructor() {
    super('https://staging-authentication.wallstreetdocs.com');
  }

  authenticate() {

    return this.post('/oauth/token', {
      grant_type: 'client_credentials',
      client_id: 'coding_test',
      client_secret: 'bwZm5XC6HTlr3fcdzRnD'
    });
  }
}

module.exports = { StatusAuthenticationRepository };
