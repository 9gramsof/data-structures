//use the keyword new
//use the keyword this
//Explicitly declare a class method name constructor
//Declare all other class methods within the class declaration

//DON'T declare the instance explicitly
//DON'T return the instance explicitly
//DON'T add class methods within the class declaration

// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

class Stack {

  constructor() {
    this.obj = {};
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var last = this.storage[this.count - 1];
    delete this.storage[this.count];
    this.count--;
    return last;
  }

  size() {
    if (this.count >= 0) {
      return this.count;
    }
    return 0;
  }

}

var nStack = new Stack();