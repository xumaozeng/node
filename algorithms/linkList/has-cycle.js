/**
 * 判断链表是否有环，并且空间复杂度为O(1)
 */

// 上下文环境
var Node = function (data) {
    this.data = data;
    this.next = null;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node1;

function hasCycle(head) {
    // head不存在则返回false
    if (!head) return false;
    // 创建两个快慢指针，快的走两步，慢的走一步
    let fast = head,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        // 如果相遇，则代表有环
        if (fast === slow) return true;
    }
    return false;
}

console.log(hasCycle(node1));
