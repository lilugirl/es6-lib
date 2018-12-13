const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++)
    fn(array[i])
}

const forEachObject = (obj, fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      fn(property, obj[property])
    }
  }
}

const unless = (predicate, fn) => {
  if (!predicate)
    fn()
}

const times = (times, fn) => {
  for (var i = 0; i < times; i++) {
    fn(i);
  }
}

const every = (arr, fn) => {
  let result = true;
  for (const value of arr)
    result = result && fn(value)
  return result
}

const some = (arr, fn) => {
  let result = false;
  for (const value of arr)
    result = result || fn(value)
  return result
}

const sortBy = (property) => {
  return (a, b) => {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result;
  }
}

export {
  forEach,
  forEachObject,
  unless,
  times,
  every,
  some,
  sortBy
}