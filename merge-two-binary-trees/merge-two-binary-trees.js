import { TreeNode } from '../utils/tree-node'

export function mergeTrees(root1, root2) {
  if (root1 && root2 === null) return root1
  if (root2 && root1 === null) return root2
  if (root1 === null && root2 === null) return null

  let value = (root1.val ? root1.val : 0) + (root2.val ? root2.val : 0)

  return new TreeNode(value, mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right))
}
