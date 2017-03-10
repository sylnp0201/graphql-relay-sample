import { find, search } from 'store/story';
import { find as findPerson } from 'store/person';

class Story {
  constructor({ id: storyId, attrs }) {
    if (!storyId && !attrs) {
      throw new Error('Invalid args for Story constructor!');
    }

    this.data = storyId ? find(storyId) : attrs;
    const { id, slug, url, headline } = this.data;

    this.id = id;
    this.slug = slug;
    this.url = url;
    this.headline = headline;
  }

  credits() {
    return this.data.credits.map(item => findPerson(item.id));
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

export function resolve ({ id }) {
  if (id) {
    return [ new Story({ id }) ];
  }

  return search().map(item => new Story({ attrs: item }));
};

export default {
  type,
  query,
  resolve,
};
