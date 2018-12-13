import {
  forEach,
  forEachObject,
  unless,
  times,
  every,
  some,
  sortBy
} from '../lib/es6-functional'

var array = [1, 2, 3]
forEach(array, (data) => console.log(data))

let object = {
  a: 1,
  b: 2
}
forEachObject(object, (k, v) => console.log(k + ":" + v))

forEach([1, 2, 3, 4, 5, 6, 7], (number) => {
  unless((number % 2), () => {
    console.log(number, " is even")
  })
})


times(10, function (n) {
  unless(n % 2, function () {
    console.log(n, " is even");
  });
});

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));

console.log(some([NaN, NaN, 4], isNaN));
console.log(some([4, 3, 2], isNaN));

var fruit = ['cherries', 'apples', 'bananas'];
console.log(fruit.sort());

var people = [{
    firstname: 'aaFirstName',
    lastname: 'cclastName'
  },
  {
    firstname: 'ccFirstName',
    lastname: 'aalastName'
  },
  {
    firstname: 'bbFirstName',
    lastname: 'bblastName'
  },
];

people.sort((a, b) => {
  return (a.firstname < b.firstname) ? -1 : (a.firstname > b.firstname) ? 1 : 0
})

console.log(people);

people.sort((a, b) => {
  return (a.lastname < b.lastname) ? -1 : (a.lastname > b.lastname) ? 1 : 0
})

console.log(people);


people.sort(sortBy("firstname"));
console.log(people);

people.sort(sortBy('lastname'));
console.log(people);