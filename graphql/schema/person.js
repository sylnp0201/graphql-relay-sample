import { find } from 'store/person';

export const type = `
  type Person {
    id: String
    name: String
    summary: String
  }
`;

export const query = `
  people(id: ID): [Person]
`;

export function resolve ({ id }) {
  return [find(id)];
};

export default {
  type,
  query,
  resolve,
};
