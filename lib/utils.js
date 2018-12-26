const map = (array, fn) => {
  let results = [];
  for (const value of array)
    results.push(fn(value));

  return results;
}


const filter = (array, fn) => {
  let results = [];
  for (const value of array)
    fn(value) ? results.push(value) : undefined
  return results;
}

export const arrayUtils = {
  map: map,
  filter: filter
}