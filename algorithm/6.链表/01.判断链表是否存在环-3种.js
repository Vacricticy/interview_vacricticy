/* 
    方法一：污染链表：将每一个访问过的节点标记为'visited'，若下次访问的节点取值为'visited',则表示存在环
    时间复杂度：O(n)

*/

var hasCycle = function (head) {
  while (head) {
    //   核心
    if (head.val == "visited") {
      return true;
    } else {
      head.val = "visited";
      head = head.next;
    }
  }
  return false;
};

/* 
    方法二：与方法一类似，也是保存前面节点的状态。用对象（hash表）存储每一个访问过的结果
    
*/

var hasCycle = function (head) {
  var hash = {};
  while (head) {
    // 核心
    if (obj[head]) {
      return true;
    } else {
      obj[head] = true;
      head = head.next;
    }
  }
  return false;
};

/* 
    方法三：快慢指针法，慢指针每次前进一步，快指针每次前进两步。如果存在环，由于慢指针每次只走一步，则肯定会存在快指针追上慢指针的情况。
    当然，这里的追上要严谨一些，需要慢指针与快指针同步。
    时间复杂度：O(n)~O(n)
*/
var hasCycle = function (head) {
  var fastP = head;
  var slowP = head;
  while (fastP) {
    if (!fastP.next || !fastP.next.next) return false;
    fastP = fastP.next.next;
    slowP = slowP.next;
    if (fastP == slowP) return true;
  }
  return false;
};
