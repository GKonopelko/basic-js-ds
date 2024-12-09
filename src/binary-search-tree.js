// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    this.rootNode === null ?
    this.rootNode = newNode :
    this.addNode(this.rootNode, newNode);
  }

  addNode(currentNode, newNode){
    if(newNode.data < currentNode.data) {
      currentNode.left === null ?
      currentNode.left = newNode :
      this.addNode(currentNode.left, newNode);
    } else {
      currentNode.right === null ?
      currentNode.right = newNode :
      this.addNode(currentNode.right, newNode);
    }
  }

  has(data) {
    return Boolean (this.find(data));
  }

  find(data) {
    return this.searchData(this.rootNode, data);
  }

  searchData(node, data){
      if(node === null) {
        return null;
      }
      if (data < node.data) {
        return this.searchData(node.left, data);
      }
      if (data > node.data) {
        return this.searchData(node.right, data);
      }
      return node;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data){
    if (node === null)
        return null;
    if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      }
    if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null)
          return null;
        if (node.left === null) {
            node = node.right;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }

        const minFromRight = this.findMinNode(node.right);
        node.data = minFromRight.data;

        node.right = this.removeNode(node.right, minFromRight.data);
        return node;
    }
  }

  min() {
    return this.findMinNode(this.rootNode).data;
  }

  max() {
    return this.findMaxNode(this.rootNode).data;

  }

  findMinNode(node){
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }

  findMaxNode(node){
    if (node.right === null)
        return node;
    else
        return this.findMaxNode(node.right);
  }
  }

module.exports = {
  BinarySearchTree
};