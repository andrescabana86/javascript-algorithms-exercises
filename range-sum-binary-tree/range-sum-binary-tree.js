export function rangeSumBST(root, low, high) {
  if (!root) return 0
  let result = typeof root === 'number' && root >= low && root <= high ? root : 0
  return (
    result + rangeSumBST(root.val, low, high) + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
  )
}
