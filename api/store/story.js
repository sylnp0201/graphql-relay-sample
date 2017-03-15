import data from 'data/stories.json';
import { Story } from 'schema/story';

export function find(id) {
  const props = data.find(item => item.id === id);

  if (!props) {
    return null;
  }

  return new Story(props);
}

export function findByAuthor(authorId) {
  const stories = data.filter(item => !!item.credits[0] && item.credits[0].id === authorId);

  if (stories.length < 1) {
    return null;
  }

  return stories.map(props => new Story(props));
}

export function search() {
  return data.map(props => new Story(props));
}
