# Testing Higher Order Functions

Your task is to write the functions below using full TDD.

## Challenges

### 1. capitalizer

`capitalizer` should accept a function as an argument and return a _new_ function.

That returned function should take a string as an argument, _CAPITALISE_ the string, and invoke the originally passed function with the _capitalised_ string.

**Examples**

```js
// Example 1
const createPDF = (file) => {
  return `${file}.pdf`;
};

createPDF('super_secret_file'); // 'super_secret_file.pdf'

const createCapitalizedPDF = capitalizer(createPDF);
createCapitalizedPDF('super_secret_file'); // 'SUPER_SECRET_FILE.pdf'
createCapitalizedPDF('northcoders_curriculum'); // 'NORTHCODERS_CURRICULUM.pdf'

// Example 2
const sayHello = (person) => {
  return `hello ${person}`;
};

sayHello('Paul'); // 'hello Paul'

const shoutHello = capitalizer(sayHello);
shoutHello('Paul'); // 'hello PAUL'
shoutHello('Haz'); // 'hello HAZ'
```

### 2. after

`after` should be able to accept two arguments (a number and a function) and it should return another function.

That returned function should invoke the _original_ passed `func` when invoked `n` or more times:

- Before and including `n` number of calls is reached, it should return `undefined`
- After being invoked `n` times it should behave _exactly_ as the original `func` would
- It should be able to accept any number of arguments to account for the unknown amount of arguments `func` will need to accept

```js
// Example 1

function doubleNum(num) {
  return num * 2;
}

const doubleAfterTwoCalls = after(2, doubleNum);
doubleAfterTwoCalls(5); // undefined
doubleAfterTwoCalls(5); // undefined
doubleAfterTwoCalls(5); // 10
doubleAfterTwoCalls(7); // 14

// Example 2 - multiple arguments

function sumFourNumbers(a, b, c, d) {
  return a + b + c + d;
}

const sumFourNumbersAfter3Calls = after(3, sumFourNumbers);
sumFourNumbersAfter3Calls(1, 2, 3, 4); // undefined
sumFourNumbersAfter3Calls(1, 2, 3, 4); // undefined
sumFourNumbersAfter3Calls(1, 2, 3, 4); // undefined
sumFourNumbersAfter3Calls(1, 2, 3, 4); // 10
sumFourNumbersAfter3Calls(10, 32, 6, 12); // 60
```

### 3. before

This function should essentially exhibit the _opposite_ behaviour to `after` but with a twist.

- `before` should accept two arguments

  - `n` - a number
  - `func` - a function

- This function should return another function

- That returned function should invoke the _original_ passed `func` when invoked _UP TO_ `n` times

  - Before `n` number of calls is reached, it should behave _exactly_ as the original `func` would
  - **After being invoked `n` times it should always provide the same return value** - This return value should be the same provided by the _last_ invocation _before_ reaching `n` regardless of the arguments provided to subsequent calls.

**Examples:**

```js
// Example 1
function capitaliseString(str) {
  return str.toUpperCase();
}

const capitaliseBeforeThreeCalls = before(3, capitaliseString);
capitaliseBeforeThreeCalls('hello'); // HELLO
capitaliseBeforeThreeCalls('northcoders'); // NORTHCODERS
// upon reaching `n` number of calls - it should always return the most recent return value
capitaliseBeforeThreeCalls('hello'); // NORTHCODERS
capitaliseBeforeThreeCalls(''); // NORTHCODERS
capitaliseBeforeThreeCalls('not northcoders please'); // NORTHCODERS

// Example 2
function sum(a, b, c) {
  return a + b + c;
}

const sumBeforeFourCalls = before(4, sum);
sumBeforeFiveCalls(1, 2, 3); // 6
sumBeforeFiveCalls(10, 11, 12); // 33
sumBeforeFiveCalls(4, 1, 9); // 14
// `n` number of calls is reached
sumBeforeFiveCalls(100, 200, 300); // 14
sumBeforeFiveCalls(10); // 14
sumBeforeFiveCalls(93, 4, 7.2); // 14
```

## More Challenges

If you have managed to implement the above using full TDD, bravo!

Remember [lodash](https://lodash.com/docs/4.17.15)? Now it is time to try and implement some functions from another library... _Ramda_! Here are the [Docs](https://ramdajs.com/docs/) & the [NPM](https://www.npmjs.com/package/ramda) page.

Ramda is another popular utility library in JavaScript. It strives for purity and is designed to facilitate the composition of functions in nice functional patterns.

Reimplement the following Rambda functions using TDD:

- once
- nthArg
- juxt
