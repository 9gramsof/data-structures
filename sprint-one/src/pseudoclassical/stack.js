
//use keyword new
//use keyword this

//don't declare the instance explicitly
//don't return ""

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {
  this.obj = {};
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var last = this.storage[this.count - 1];
  delete this.storage[this.count];
  this.count--;
  return last;
};

Stack.prototype.size = function() {
  if (this.count >= 0) {
    return this.count;
  }
  return 0;
};

//don't need a 'return obj' in the Stack function, since keyword 'new' invoked a new Stack with all the other Stack functions attached to it.
var nStack = new Stack();

