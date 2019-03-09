class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
   		this.right = null;
  		this.parent = null;
	}

	appendChild(node) {
		this.root = node;
	}

	removeChild(node) {
	
	}

	remove() {
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
