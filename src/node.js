class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
   		this.right = null;
		this.parent = null;
		this.next = null;  
	}

	appendChild(node) {
		if(!this.right && !this.left ){
			this.parent = node;
		}
	}

	removeChild(node) {
		if(!this.parent.node){
			return 'error';
		}
		return this.parent.node = null;
	}

	remove() {
	
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
