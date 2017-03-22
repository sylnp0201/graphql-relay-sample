import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import schema from './schema';
import root from './root';
import store from './store';

const PORT = 4000;

const app = express();

app.use(morgan('tiny'));

app.use(bodyParser.text({ type: 'application/graphql' }));
app.use(bodyParser.json());

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: store,
}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
  context: store,
}));

app.listen(PORT);
console.log(`Running a GraphQL API server at localhost:${PORT}`);
