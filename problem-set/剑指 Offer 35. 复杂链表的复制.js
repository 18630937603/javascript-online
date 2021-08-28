var copyRandomList = function (head, cachedNode = new Map()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val});  //  这里第二个值必须是对象
        Object.assign(cachedNode.get(head), {
            next: copyRandomList(head.next, cachedNode),   // 这里太牛了，利用函数调用栈的顺序，来保证调用random之前所有结点都已经存进map里
            random: copyRandomList(head.random, cachedNode)
        });
    }
    return cachedNode.get(head);
}
