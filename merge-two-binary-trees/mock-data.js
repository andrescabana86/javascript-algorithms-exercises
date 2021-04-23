import { TreeNode } from '../utils/tree-node'

// root1 = [1,2,null,3] root2 = [1,null,2,null,3]
export const example_1 = {
  root1: new TreeNode(1, new TreeNode(2, 3, undefined), undefined),
  root2: new TreeNode(1, undefined, new TreeNode(2, undefined, 3)),
}

// root1 = [1,3,2,5] root2 = [2,1,3,null,4,null,7]
export const example_2 = {
  root1: new TreeNode(1, new TreeNode(3, 5, undefined), new TreeNode(2, undefined, undefined)),
  root2: new TreeNode(2, new TreeNode(1, undefined, 4), new TreeNode(3, undefined, 7)),
}

// root1 = [1] root2 = [1,2]
export const example_3 = {
  root1: new TreeNode(1),
  root2: new TreeNode(2, 2),
}

// root1 = [9,-1,null,-2,0,-4,null,null,8,-5,-3,6,null,null,null,null,null,null,7] root2 = [-1,-2,0,null,null,null,8,6,null,null,7]
export const example_4 = {
  root1: new TreeNode(
    9,
    new TreeNode(
      -1,
      new TreeNode(-2, new TreeNode(-4, -5, -3), undefined),
      new TreeNode(0, undefined, new TreeNode(8, new TreeNode(6, undefined, 7), undefined)),
    ),
    undefined,
  ),
  root2: new TreeNode(
    -1,
    new TreeNode(-2),
    new TreeNode(0, undefined, new TreeNode(8, new TreeNode(6, undefined, 7), undefined)),
  ),
}
