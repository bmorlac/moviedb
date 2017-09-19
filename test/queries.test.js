import chai from 'chai';

import '../src';

describe('GraphQL Queries', () => {
  it('should return 200', (done) => {
    chai.request('http://localhost:3000')
      .get('/graphql')
      .query({ query: '{allMovies{id,name}}' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('object').with.own.property('allMovies');
        expect(res.body.data.allMovies).to.be.an('array').of.length(1);
        expect(res.body.data.allMovies[0]).to.have.all.ordered.keys('id', 'name');
        done();
      });
  });
});

describe('async/await example', () => {
  it('should return "Hello World."', async () => {
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve('Hello World.'), 2000);
    });
    expect(result).to.equal('Hello World.');
  });
});
