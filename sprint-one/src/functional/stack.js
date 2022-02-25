var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var last = storage[count - 1];
    delete storage[count];
    count--;
    return last;
  };

  someInstance.size = function() {
    if (count >= 0) {
      return count;
    }
    return 0;
  };

  return someInstance;
};
