/*
HIGH ORDER
creates list object containing head/tail, list entries, and methods to modify/search entries
node function creates list entries with value and reference to next entry

*/

//pseudocode

//create a counter property in list

//addToTail
//create new node
//check if head equals null
//if yes, update head and tail to new node
//if no, update original tail referenced node to new node
// and update tail to new node

//removeHead
//declare removed variable equal to head value
// reassign head to node's next value
// return removed

//contains
// declare truth flag
// declare recursive search function with node as parameter
// test if node value matches target
// if yes, change result to true and return
// if not, check if next is null
//invoke recursion starting at head
//return truth flag

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {

    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
  };

  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;
  };

  list.contains = function(target) {
    var result = false;
    let searchNode = function(n) {
      if (n.value === target) {
        result = true;
        return;
      }
      if (n.next === null) {
        return;
      }
      searchNode(n.next);
    };
    searchNode(this.head);

    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  //addToTail() - constant
  //removeHead - constant
  //contains() - linear
 */
