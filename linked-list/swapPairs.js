/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let swapable = true
    let dummy = head

    while (dummy?.next) {
        if (swapable) {
            const tempValue = dummy.val
            dummy.val = dummy.next.val
            dummy.next.val = tempValue
        }

        swapable = !swapable
        dummy = dummy.next
    }

    return head
};


const list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

console.log(swapPairs(list1))