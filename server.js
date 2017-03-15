import express from 'express';
import morgan from 'morgan';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import schema from 'schema';
import root from 'root';
import store from 'store';

const PORT = process.env.port;

const app = express();

app.use(morgan('tiny'));

app.use(express.static('public'))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
  context: store,
}));

app.use('/graphiql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: store,
}));

app.listen(PORT);
console.log(`Running a graphql server at localhost:${PORT}`);
