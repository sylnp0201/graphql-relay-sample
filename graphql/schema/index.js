import { buildSchema } from 'graphql';

import * as story from './story';
import * as person from './person';

export default buildSchema(`
  type Query {
    ${ story.query }
    ${ person.query }
  }

  ${ story.type }
  ${ person.type }
`);
