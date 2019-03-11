class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
   		this.right = null;
		this.parent = null;
		//this.child = null;
		this.next = null;  
	}

	appendChild(node) {
		if(!this.right && !this.left ){
			this.parent = node;
		}
	}

	removeChild(node) {
		if(!this.parent){
			return 'error';
		} else {
			let current = this.parent;
			
		}
		return this.parent.node = null;
	}

	remove() {
		if(!this.node){
		this.parent.removeChild(child);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
