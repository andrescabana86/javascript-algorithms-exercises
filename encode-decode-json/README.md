# Encode <=> Decode JSON

## Problem
* Define an encoding format that can represent a JSON data structure as an array of single-line strings.
```javascript
const arrOfSingleLineStrings = [
  'car/color="blue"',
  'car/year=1999',
  'car/broken[0]="left mirror"',
  'car/broken[1]="right door"',
]
```
* Each JSON value primitive (e.g. number, string, boolean, null) should correspond to its own string entry
* in the output array. Other than those requirements, your encoding scheme can be anything you want.

## Goal
* Create an `encode` function that takes JSON data input and outputs an array of strings in your encoding format.
* Create a `decode` function that takes the string array and transforms it back into the original JSON data structure.

```javascript
// example of encoded
export const objExampleEncoded = [
  'car/color="blue"',
  'car/year=1999',
  'car/broken[0]="left mirror"',
  'car/broken[1]="right door"',
]
// example of decoded
export const objExample = {
  car: {
    color: 'blue',
    year: 1999,
    broken: ['left mirror', 'right door'],
  },
}
```

## Run tests
Run tests with `npm run test --workspace=encode-decode-json`