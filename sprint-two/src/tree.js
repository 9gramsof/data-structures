/*

*/

/*
pseudocode

addChild:
  create new tree in parent children array

contains:
  recursive method
  set truth flag
  declare recursive function
  if node value === target
    set truth flag to true
    return;
  if not
    evaluate if children arr is empty
      yes - return (base case)
      no - iterate over children arr & recurse on each child (recursive case)
  return truth flag
*/

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // made into array
  _.extend(newTree, treeMethods);
  return newTree;

};

var treeMethods = {};

// parent.addChild(value1)
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var isTrue = false;

  var innerContains = function(n) {
    if (n.value === target) {
      isTrue = true;
      return;
    }
    if (n.children.length === 0) {
      return;
    }
    for (var i = 0; i < n.children.length; i++) {
      innerContains(n.children[i]);
    }
  };
  innerContains(this);
  return isTrue;
};





/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant
  contains: linear
 */
