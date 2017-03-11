import express from 'express';
import morgan from 'morgan';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import schema from './schema';
import root from './root';
import store from './store';

const app = express();

app.use(morgan('tiny'))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: store,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
