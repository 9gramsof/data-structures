var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var first = storage[keys[0]];
    delete storage[keys[0]];
    return first;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
