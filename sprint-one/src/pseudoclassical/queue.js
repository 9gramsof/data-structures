//use keyword new
//use keyword this

//don't declare the instance explicitly
//don't return ""

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  this.obj = {};
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var first = this.storage[keys[0]];
  delete this.storage[keys[0]];
  return first;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var nQueue = new Queue();
