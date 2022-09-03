class TreeNode {
  val: string;
  right?: Node;
  left?: Node;

  constructor(val: string) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

export default TreeNode;
