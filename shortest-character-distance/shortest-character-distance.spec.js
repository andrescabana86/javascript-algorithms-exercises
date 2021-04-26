import { shortestToChar } from './shortest-character-distance'
import { example_1, example_2 } from './mock-data'

describe('Shortest Character Distance', () => {
  it('should find values for s = "loveleetcode", c = "e" where [i] is the distance from index i to the closest occurrence of character c in s', () => {
    const distance = shortestToChar(example_1.s, example_1.c)
    expect(distance).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
  })

  it('should find values for s = "aaab", c = "b" where [i] is the distance from index i to the closest occurrence of character c in s', () => {
    const distance = shortestToChar(example_2.s, example_2.c)
    expect(distance).toEqual([3, 2, 1, 0])
  })
})
