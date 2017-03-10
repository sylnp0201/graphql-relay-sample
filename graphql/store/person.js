import data from 'data/people.json';

export function find(id) {
  return data.find((item) => item.id === id);
}
