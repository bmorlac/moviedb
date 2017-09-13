export default `
  enum Format {
    DVD, BLUERAY, VHS, DIGITAL, OTHER
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
`;
