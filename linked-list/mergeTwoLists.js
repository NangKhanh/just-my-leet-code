/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let value = new ListNode()
    let pointer = value
    while (list1 && list2) {
        if (list1.val < list2.val) {
            pointer.next = list1
            list1 = list1.next
        } else {
            pointer.next = list2
            list2 = list2.next
        }
        pointer = pointer.next
    }
    if (list1) {
        pointer.next = list1
    }
    if (list2) {
        pointer.next = list2
    }
    return value
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const list1 = {
    val: 9,
    next: {
        val: 10,
        next: {
            val: 16,
            next: {
                val: 18,
                next: {
                    val: 20,
                    next: {
                        val: 28,
                        next: null
                    }
                }
            }
        }
    }
}


const list2 = {
    val: 1,
    next: {
        val: 5,
        next: {
            val: 12,
            next: {
                val: 16,
                next: {
                    val: 17,
                    next: {
                        val: 35,
                        next: null
                    }
                }
            }
        }
    }
}


console.log(mergeTwoLists(list1, list2))