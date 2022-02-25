//use Object.create with the object from step 2 to create instances of your class
//don't use the keyword new

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function() {
    var last = this.storage[this.count - 1];
    delete this.storage[this.count];
    this.count--;
    return last;
  },

  size: function() {
    if (this.count >= 0) {
      return this.count;
    }
    return 0;
  }

};
