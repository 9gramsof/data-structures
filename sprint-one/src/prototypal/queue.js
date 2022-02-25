//use Object.create with the object from step 2 to create instances of your class
//don't use the keyword new

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  dequeue: function() {
    var keys = Object.keys(this.storage);
    var first = this.storage[keys[0]];
    delete this.storage[keys[0]];
    return first;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};


