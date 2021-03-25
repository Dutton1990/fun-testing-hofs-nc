# Testing Higher Order Functions

Your task is to write the functions below using full TDD.

## Challenges

### 1. capitalizer

`capitalizer` should accept a function as an argument and return a _new_ function.

That returned function should take a string as an argument and invoke the originally passed function with that string _capitalised_.

**Example 1**

```js
const createFilename = (file) => {
  return `${file}.pdf`;
};

const createCapitalizedFileName = capitalizer(createFilename);
createCapitalizedFileName('super_secret_file'); // SUPER_SECRET_FILE.pdf
createCapitalizedFileName('northcoders_curriculum'); // NORTHCODERS_CURRICULUM.pdf
```

### 2. after

`after` should be able to accept two arguments (a number and a function) and it should return another function.
​
That returned function should invoke the _original_ passed `func` when invoked `n` or more times:

- Before and including `n` number of calls is reached, it should return `undefined`
- After being invoked `n` times it should behave _exactly_ as the original `func` would
- It should be able to accept any number of arguments to account for the unknown amount of arguments `func` will need to accept
  ​

**Example 1**

```js
function doubleNum(num) {
  return num * 2;
}
​
const doubleAfterTwoCalls = after(2, doubleNum);
doubleAfterTwoCalls(5); // undefined
doubleAfterTwoCalls(5); // undefined
doubleAfterTwoCalls(5); // 10
doubleAfterTwoCalls(7); // 14
```

**Example 2 - multiple arguments**

```js
function sumFourNumbers(a, b, c, d) {
  return a + b + c + d;
}
​
const sumFourNumbersAfter3Calls = after(3, sumFourNumbers);
sumFourNumbersAfter3Calls(1, 2, 3, 4); // undefined
sumFourNumbersAfter3Calls(1, 2, 3, 4); // undefined
sumFourNumbersAfter3Calls(1, 2, 3, 4); // undefined
sumFourNumbersAfter3Calls(1, 2, 3, 4); // 10
sumFourNumbersAfter3Calls(10, 32, 6, 12); // 60
```

### 3. before

This function should essentially exhibit the _opposite_ behaviour to `after` but with a twist.
​
`before` should accept two arguments

- `n` - a number
- `func` - a function
  ​
  This function should return another function
  ​
- That returned function should invoke the _original_ passed `func` when invoked _UP TO_ `n` times
  - Before `n` number of calls is reached, it should behave _exactly_ as the original `func` would
  - **After being invoked `n` times it should always provide the same return value** - This return value should be the same provided by the _last_ invocation _before_ reaching `n` regardless of the arguments provided to subsequent calls
    ​
    Example
    ​
    ​

```js
function capitaliseString(str) {
  return str.toUpperCase();
}
​
const capitaliseBeforeThreeCalls = before(3, capitaliseString);
capitaliseBeforeThreeCalls('hello'); // HELLO
capitaliseBeforeThreeCalls('northcoders'); // NORTHCODERS
// upon reaching `n` number of calls - it should always return the most recent return value
capitaliseBeforeThreeCalls('hello'); // NORTHCODERS
capitaliseBeforeThreeCalls(''); // NORTHCODERS
capitaliseBeforeThreeCalls('not northcoders please'); // NORTHCODERS
```

```js
function sum(a, b, c) {
  return a + b + c;
}
​
const sumBeforeFourCalls = before(4, sum);
sumBeforeFiveCalls(1, 2, 3); // 6
sumBeforeFiveCalls(10, 11, 12); // 33
sumBeforeFiveCalls(4, 1, 9); // 14
// `n` number of calls is reached
sumBeforeFiveCalls(100, 200, 300); // 14
sumBeforeFiveCalls(10); // 14
sumBeforeFiveCalls(93, 4, 7.2); // 14
```
