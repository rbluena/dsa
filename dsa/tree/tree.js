const logger = (data) => console.log(JSON.stringify(data));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");

// Construction

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/**
 * Depth first search with iteration
 *
 * @param {Node} root
 * @returns Array
 */
function depthFirstSearch(root) {
  if (!root) return [];

  const stack = [root];
  const results = [];

  while (stack.length > 0) {
    const current = stack.pop();
    // Pre-order
    results.push(node.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return results;
}

const results = [];

/**
 * Depth first search with recursion.
 *
 * @param {Node} root
 * @returns Array
 */
function recursiveDepthFirstSearch(root) {
  const current = root;

  if (current?.val) {
    results.push(current?.val);
  }

  if (current?.left) recursiveDepthFirstSearch(current.left);
  if (current?.right) recursiveDepthFirstSearch(current.right);

  return results;
}

// logger(recursiveDepthFirstSearch(a));
// logger(recursiveDepthFirstSearch());

/**
 * BREADTH FIRST SEARCH
 */

function breadthFirstSearch(root) {
  const results = [];
  const queue = [root];

  if (!root) return results;

  while (queue.length > 0) {
    const current = queue.shift();
    results.push(current.val);

    // This is left to right traverse,
    //  by flipping will make it right to left traverse.
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return results;
}

logger(breadthFirstSearch(a));
