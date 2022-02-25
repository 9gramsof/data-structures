//use the keyword new
//use the keyword this
//Explicitly declare a class method name constructor
//Declare all other class methods within the class declaration

//DON'T declare the instance explicitly
//DON'T return the instance explicitly
//DON'T add class methods within the class declaration


// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

class Queue {

  constructor() {
    this.obj = {};
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var first = this.storage[keys[0]];
    delete this.storage[[keys[0]]];
    return first;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var nQueue = new Queue();