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
    movie: async (obj, { id }) => {
      let movie;
      if (id === 42) {
        movie = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              id: 42,
              name: "The Hitchhiker's Guide to the Galaxy",
              releasedAt: new Date(),
              addedAt: new Date(),
              format: 'BLURAY',
            });
          }, 3000);
        });
      } else {
        movie = {
          id: 4711,
          name: 'some movie',
          releasedAt: new Date(),
          addedAt: new Date(),
          format: 'DVD',
        };
      }
      console.log(movie);
      return movie;
    },
  },
};

export default resolvers;
