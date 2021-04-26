# Range Sum Binary Tree

## Problem
* Given the root node of a binary search tree

```javascript
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
```

## Goal
* Return the sum of values of all nodes with a value in the range [low, high].

```javascript
// Input:
const root = [10,5,15,3,7,null,18], low = 7, high = 15 //=> Output: 32
// Input:
const root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10 //=> Output: 23
```

## Run tests
Run tests with `npm run test --workspace=range-sum-binary-tree`