import { rangeSumBST } from './range-sum-binary-tree'
import { example_1 } from './mock-data'

describe('Range Sum Binary Tree', () => {
  it('should sum root = [10,5,15,3,7,null,18], low = 7, high = 15 properly', () => {
    const total = rangeSumBST(example_1, 7, 15)
    expect(total).toBe(32)
  })
})
