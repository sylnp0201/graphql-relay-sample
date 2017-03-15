export class Person {
  constructor(props) {
    this.props = props;
    const { id, name, summary } = this.props;

    this.id = id;
    this.name = name;
    this.summary = summary;
  }

  stories(_, Store) {
    return Store.Story.findByAuthor(this.id);
  }
}

export const type = `
  type Person {
    id: String
    name: String
    summary: String
    stories: [Story]
  }
`;

export const query = `
  people(id: ID): [Person]
`;

export function resolve ({ id }, Store) {
  return [Store.Person.find(id)];
};
