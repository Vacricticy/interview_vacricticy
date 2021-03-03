/* 方法一：双指针 */
function reverse(head) {
  var current = head;
  var prev = null;
  var tmp;
  while (current) {
    tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  return prev;
}

/* 方法二：递归 */
function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
  var newLinked = reverse(head.next);
  var newLinkedLast = head.next; //用一个指针指向新链表的表尾，即head.next
  newLinkedLast.next = head;
  head.next = null; //切断head与新链表原来的联系
  return newLinked;
}
