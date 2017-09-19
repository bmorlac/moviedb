import chai from 'chai';

import '../src';

describe('GraphQL Queries', () => {
  it('should return 200', (done) => {
    chai.request('http://localhost:3000')
      .get('/graphql')
      .query({ query: '{allMovies{id,name}}' })
      .end((err, res) => {
        expect(res).to.have.status(200);
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
