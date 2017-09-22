import chai from 'chai';

import app from '../src';
import createUmzug from './umzug-helper';

let seeders;
let seeds;
before(async () => {
  const migrations = createUmzug('./migrations', true);
  seeders = createUmzug('./seeders');
  await migrations.up();
  seeds = await seeders.up();
});

after(() => seeders.down({ migrations: seeds.map(migration => migration.file) }));

describe('GraphQL Queries', () => {
  it('should return 200', (done) => {
    chai.request(app)
      .get('/graphql')
      .query({ query: '{allMovies{id,name}}' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('object').with.own.property('allMovies');
        expect(res.body.data.allMovies).to.be.an('array').of.length(1);
        expect(res.body.data.allMovies[0]).to.have.all.ordered.keys('id', 'name');
        expect(res.body.data.allMovies[0].name).to.equal('Some Movie');
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
