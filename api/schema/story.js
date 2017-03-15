export class Story {
  constructor(props) {
    this.props = props;
    const { id, slug, url, headline } = this.props;

    this.id = id;
    this.slug = slug;
    this.url = url;
    this.headline = headline;
  }

  credits(args, Store) {
    return this.props.credits.map(c => Store.Person.find(c.id));
  }
}

export const type = `
  type Story {
    id: ID
    slug: String
    url: String
    headline: String
    credits: [Person]
  }
`;

export const query = `
  stories(id: ID): [Story]
`;

export function resolve ({ id }, Store) {
  if (id) {
    return [Store.Story.find(id)];
  }

  return Store.Story.search();
};
