export default {
  up: queryInterface/* , Sequelize */ => queryInterface.bulkInsert('Movies', [{
    name: 'Some Movie',
    releasedAt: new Date(Date.UTC(1990, 0, 13)),
    addedAt: new Date(),
    imbdbLink: 'https://www.imdb.com/',
    format: 'DVD',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: queryInterface/* , Sequelize */ => queryInterface.bulkDelete('Movies'),
};
