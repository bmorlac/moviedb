import _ from 'lodash';

const resolvers = {
  Query: {
    allMovies: () => [
      {
        id: 1,
        name: 'test',
        releasedAt: new Date(),
        addedAt: new Date(),
        format: 'DVD',
      },
    ],
    movie: (obj, { id }, { models }) => {
      const movie = models.Movie.findOne({ where: { id } });
      return movie;
    },
  },

  Mutation: {
    createMovie: (obj, { input }, { models }) => models.Movie.create(input),
    updateMovie: async (obj, { id, input }, { models }) => {
      await models.Movie.update(input, { where: { id } });
      return _.merge({}, input, { id });
    },
  },
};

export default resolvers;
