const resolvers = {
  Query: {
    allMovies: () => [
      {
        id: 1,
        name: 'test',
        releasedAt: new Date(),
        addAt: new Date(),
        format: 'DVD',
      },
    ],
  },
};

export default resolvers;
