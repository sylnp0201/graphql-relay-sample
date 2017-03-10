import { buildSchema } from 'graphql';

import story from './story';
import person from './person';

export default buildSchema(`
  type Query {
    ${ story.query }
    ${ person.query }
  }

  ${ story.type }
  ${ person.type }
`);
