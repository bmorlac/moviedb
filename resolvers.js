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
      console.log(movie);
      return movie;
    },
  },
};

export default resolvers;
