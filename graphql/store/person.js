import data from 'data/people.json';
import { Person } from 'schema/person';

export function find(id) {
  const props = data.find((item) => item.id === id);

  if (!props) {
    return null;
  }

  return new Person(props);
}
