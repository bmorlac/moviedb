import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';
import BootStrap from './init';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const context = {
  models,
  username: 'bmorlac',
};

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  BootStrap.init(context);
}

const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context,
  }),
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.listen(3000);

export default app;
