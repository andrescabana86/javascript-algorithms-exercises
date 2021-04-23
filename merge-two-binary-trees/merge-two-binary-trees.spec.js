import { mergeTrees } from './merge-two-binary-trees'
import { example_1, example_2, example_3, example_4 } from './mock-data'

describe('Merge Two Binary Trees', () => {
  it('should merge root1 = [1,2,null,3] and root2 = [1,null,2,null,3] properly', () => {
    const { root1, root2 } = example_1
    const merged = mergeTrees(root1, root2)
    expect(merged).toEqual({
      val: 2,
      left: { val: 2, left: 3, right: null },
      right: { val: 2, left: null, right: 3 },
    })
  })

  it('should merge root1 = [1,3,2,5] and root2 = [2,1,3,null,4,null,7] properly', () => {
    const { root1, root2 } = example_2
    const merged = mergeTrees(root1, root2)
    expect(merged).toEqual({
      val: 3,
      left: {
        val: 4,
        left: 5,
        right: 4,
      },
      right: {
        val: 5,
        left: null,
        right: 7,
      },
    })
  })

  it('should merge root1 = [1] and root2 = [1,2] properly', () => {
    const { root1, root2 } = example_3
    const merged = mergeTrees(root1, root2)
    expect(merged).toEqual({
      val: 3,
      left: 2,
      right: null,
    })
  })

  it('should merge root1 = [9,-1,null,-2,0,-4,null,null,8,-5,-3,6,null,null,null,null,null,null,7] root2 = [-1,-2,0,null,null,null,8,6,null,null,7] properly', () => {
    const { root1, root2 } = example_4
    const merged = mergeTrees(root1, root2)
    expect(merged).toEqual({
      val: 8,
      left: {
        val: -3,
        left: {
          val: -2,
          left: {
            val: -4,
            left: -5,
            right: -3,
          },
          right: null,
        },
        right: {
          val: 0,
          left: null,
          right: {
            val: 8,
            left: {
              val: 6,
              left: null,
              right: 7,
            },
            right: null,
          },
        },
      },
      right: {
        val: 0,
        left: null,
        right: {
          val: 8,
          left: {
            val: 6,
            left: null,
            right: 7,
          },
          right: null,
        },
      },
    })
  })
})
