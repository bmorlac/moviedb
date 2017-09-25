export default {
  up: async ({ sequelize: { models } }/* , Sequelize */) => {
    const promises = [];
    const movie = await models.Movie.findOne({ where: { name: 'Some Movie' } });
    if (!movie) {
      promises.push(models.Movie.create({
        name: 'Some Movie',
        releasedAt: new Date(Date.UTC(1990, 0, 13)),
        addedAt: new Date(),
        imbdbLink: 'https://www.imdb.com/',
        format: 'DVD',
      }));
    }
    return Promise.all(promises);
  },

  down: queryInterface/* , Sequelize */ => queryInterface.bulkDelete('Movies'),
};
