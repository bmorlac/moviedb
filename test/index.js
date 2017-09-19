import http from 'http';

import '../src';

describe('GraphQL Queries', () => {
  it('should return 200', (done) => {
    http.get('http://localhost:3000/graphql?query={allMovies{id,name}}', (res) => {
      expect(res.statusCode).to.equal(200);
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
