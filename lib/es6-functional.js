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

const sortBy2 = (property, sort) => {
  return (a, b) => {
    if (sort === 'desc') {
      var result = (b[property] < a[property]) ? -1 : (b[property] > a[property]) ? 1 : 0;
      return result;
    }

    if (sort === 'asc') {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result;
    }
  };
};

const sortBy3 = (property, sort) => {
  return (a, b) => {
    if (sort === 'desc') {

      return b[property] - a[property];
    }

    if (sort === 'asc') {
      return a[property] - b[property];
    }
  };
};


const tap = (value) => (fn) => (
  typeof (fn) === 'function' && fn(value),
  console.log(value)
)

const unary = (fn) =>
  fn.length === 1 ? fn : (arg) => fn(arg)


const once = (fn) => {
  let done = false;
  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments))
  }
}


const memoized = (fn) => {
  const lookupTable = {};
  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
}


export {
  forEach,
  forEachObject,
  unless,
  times,
  every,
  some,
  sortBy,
  sortBy2,
  sortBy3,
  tap,
  unary,
  once,
  memoized
}