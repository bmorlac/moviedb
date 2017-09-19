export default `
  enum Format {
    DVD, BLURAY, VHS, DIGITAL, OTHER
  }

  input MovieInput {
    name: String!
    releasedAt: String!
    addedAt: String!
    imbdbLink: String
    format: Format!
  }

  type Movie {
    id: Int!
    name: String!
    releasedAt: String!
    addedAt: String!
    imbdbLink: String
    format: Format!
  }

  type Query {
    allMovies: [Movie!]!
    movie(id: Int!): Movie
  }

  type Mutation {
    createMovie(input: MovieInput): Movie
    updateMovie(id: Int!, input: MovieInput): Movie
  }
`;
