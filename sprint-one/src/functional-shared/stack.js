//create an obj that holds the methods that will be shared by all instances of the class
//use the keyword this
//use _.extend to copy the methods onto the instance.

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {
  var obj = {
    storage: {},
    count: 0,
  };
  _.extend(obj, stackMethods);
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



// _.extend(destination, *sources)
// Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source will override properties of the same name in previous arguments.

// _.extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}