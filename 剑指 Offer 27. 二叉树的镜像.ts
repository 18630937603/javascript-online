
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function mirrorTree(root: TreeNode | null): TreeNode | null {
    if(root===null){return null}
    function switchChild(node:TreeNode | null):void{
        if(node===null){
            return
        }else{
            [node.left,node.right] = [node.right,node.left]
            switchChild(node.left)
            switchChild(node.right)
        }
    }
    switchChild(root)
    return root
}
