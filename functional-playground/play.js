import {
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
} from '../lib/es6-functional';

import {
  arrayUtils
}
from '../lib/utils';

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
    lastname: 'cclastName',
    time: 123456,
  },
  {
    firstname: 'ccFirstName',
    lastname: 'aalastName',
    time: 234566,
  },
  {
    firstname: 'bbFirstName',
    lastname: 'bblastName',
    time: 334566,
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

people.sort(sortBy2('time', 'desc'));
console.log(people);

people.sort(sortBy2('time', 'asc'));
console.log(people);

people.sort(sortBy3('time', 'asc'));
console.log(people);

people.sort(sortBy3('time', 'desc'));
console.log(people);


tap("fun")((it) => console.log("value is ", it));

forEach([1, 2, 3], (a) => tap(a)(() => {
  console.log(a)
}));


const result = [1, 2, 3].map((a) => {
  return a * a
});



console.log(result);

const result2 = ['1', '2', '3'].map(unary(parseInt));
console.log(result2);

var doPayment = once(() => {
  console.log('Payment is done')
});

doPayment();


doPayment();


let fastFactorial = memoized((n) => {
  if (n === 0) {
    return 1;
  }

  return n * fastFactorial(n - 1);
});

const result3 = fastFactorial(5);
console.log(result3);

const result4 = fastFactorial(4);
console.log(result4);


let a = arrayUtils.map([1, 2, 4], (x) => x * x);
console.log(a);


let apressBooks = [{
  id: 111,
  title: 'C# 6.0',
  author: 'Andrew Troelsen',
  rating: [4.7],
  reviews: [{
    good: 4,
    exclelent: 12
  }]
}, {
  id: 222,
  title: 'Efficient Learning Machines ',
  author: 'Rahul Khanna',
  rating: [4.5],
  reviews: []
}, {
  id: 333,
  title: 'Pro AngularJS',
  author: 'Adam Freeman',
  rating: [4.0],
  reviews: []
}];

const b = arrayUtils.map(apressBooks, (book) => {
  return {
    title: book.title,
    author: book.author
  }
})

console.log(b);


const c = arrayUtils.filter(apressBooks, (book) => book.rating[0] > 4.5);

console.log(c);