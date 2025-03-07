/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let res = new ListNode(0, head);
    let dummy = res
    while (n > 1) {
        head = head.next
        n--
    }
    while (head.next) {
        head = head.next
        dummy = dummy.next
    }
    dummy.next = dummy.next.next
    return res.next
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const head = {
    val: 9,
    next: {
        val: 39,
        next: {
            val: 56,
            next: {
                val: 62,
                next: {
                    val: 93,
                    next: {
                        val: 78,
                        next: null
                    }
                }
            }
        }
    }
}
console.log(removeNthFromEnd(head, 2));
