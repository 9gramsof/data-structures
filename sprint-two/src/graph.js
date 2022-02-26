/*
high order:

graph instantiated with pseudoclassical style:
    just add necessary properties, methods will be added to prototype
    contains array of all nodes in graph

nodes:
    contain value property
    contain property listing connected neighbor nodes (array)

addNode:
I: node value
O: no return, creates new node with passed value in graph node array

contains:
I: target value
O: boolean result

removeNode:
I: value of node to be removed
O: no return, node removed from graph array

hasEdge:
I: source node, target node
O: boolean based on if fromNode contains toNode in neighbor list

addEdge:
I: source node, target node
O: no return, adds reciprocal? node reference to each node neighbor list?

removeEdge:
I: source node, target node
O: no return, removes reciprocal? node reference from each node neighbor list

forEachNode:
I:
*/

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node] !== undefined) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.storage[node].length; i ++) {
    this.removeEdge(node, this.storage[node][i]);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let theRipper = function(value, array) {
    for (let i = 0; i < array.length; i ++) {
      if (array[i] === value) {
        array.splice(i, 1);
      }
    }
  };
  theRipper(toNode, this.storage[fromNode]);
  theRipper(fromNode, this.storage[toNode]);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: constant
contains: constant
removeNode: linear
hasEdge: linear
addEdge: constant
removeEdge: quadratic
forEachNode: linear
 */


