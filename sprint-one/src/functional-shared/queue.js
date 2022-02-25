//create an obj that holds the methods that will be shared by all instances of the class
//use the keywork this
//use _.extend to copy the methods onto the instance.

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  var obj = {
    storage: {},
    count: 0,
  };
  _.extend(obj, queueMethods);
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


