/**
 *
 * @param {Node} root
 * @param {Primitive} target
 */
function treeIncludes(root, target) {
  const queue = [root];

  if (!root) return false;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val === target) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}

function treeIncludesRecursive(root, target) {
  if (!root) return false;
  if (root.val === target) return true;

  return (
    treeIncludesRecursive(root.left, target) ||
    treeIncludesRecursive(root.right, target)
  );
}

function treeMinValue(root) {
  let smallest = Infinity;
}

function treeMinValRecursive(root) {
  if (!root) return Infinity;

  const leftMin = treeMinValRecursive(root.left);
  const rightMin = treeMinValRecursive(root.right);

  return Math.min(root.val, leftMin.val, rightMin);
}

function maxPathSum(root) {}

function inventingBinaryTree(root) {}

function lowestCommonAncestor() {}

function convertSortedArrayToBST() {}

function converSortedListToBST() {}

function subtreeOfAnotherTree() {}
