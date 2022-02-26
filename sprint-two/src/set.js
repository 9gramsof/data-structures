/*
Set:
contains unordered unique values
	should not add duplicate values

use object to store values as value-value property

add:
I: value to add to set
O: no return, adds value to set
C: cannot add duplicate values

contains:
I: target value
O: returns boolean (true if value exists in set)
C: does not accept 'undefined' as a value

remove:
I: value to remove from set
O: no return, removes value from set
*/
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
