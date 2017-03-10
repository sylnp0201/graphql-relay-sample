import data from 'data/stories.json';

export function find(id) {
  return data.find((story) => story.id === id);
}

export function search() {
  return data;
}
