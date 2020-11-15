// ketika testing environtment variable harus kita set ke TEST
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
// const index = require('./index');

chai.use(chaiHttp);

describe('test root', () => {
  it('testing awal banget', (done) => {
    done();
  });
});
