const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.left = null;
		this.right = null
		//this.heap = [null]
		this.parentNodes = [];
		this.nodes=[];
	}

	push(data, priority) {
		//this.data = data;
		//this.priority = priority;\
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(this.root==null){
				return;
		}
		return this.root;

		
	}

	detachRoot() {
		

		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.nodes.length;
	}

	isEmpty() {
		
		return this.root == null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if ( this.root==null && this.nodes.length==0){
			console.log(this.nodes.length);
			this.root=node;
			this.nodes.push(node);
			this.parentNodes.push(node);
			console.log(this.nodes.length);
		}
		else {
			this.nodes.push(node);
			console.log(this.root.data);
			let currentNodeIdx = this.nodes.length - 1;
			let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
			node.parent=this.nodes[currentNodeParentIdx];
			if( this.nodes[currentNodeParentIdx].left == null){
				this.nodes[currentNodeParentIdx].left=node;
			}
			else {
				this.nodes[currentNodeParentIdx].right=node;

			}


			
		}
	}
	
		//node.shiftNodeUp;

			//const newNode = new Node(value, priority);
			/*this.root.push(node);
			let currentNodeIdx = this.heap.length - 1;
			let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
			while (
			  this.heap[currentNodeParentIdx] &&
			  newNode.priority > this.heap[currentNodeParentIdx].priority
			) {
			  const parent = this.heap[currentNodeParentIdx];
			  this.heap[currentNodeParentIdx] = newNode;
			  this.heap[currentNodeIdx] = parent;
			  currentNodeIdx = currentNodeParentIdx;
			  currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
			}
			while (
			  this.nodes[currentNodeParentIdx] &&
			  node.priority > this.nodes[currentNodeParentIdx].priority
			) {
			  const parent = this.nodes[currentNodeParentIdx];
			  this.nodes[currentNodeParentIdx] = node;
			  this.nodes[currentNodeIdx] = parent;
			  currentNodeIdx = currentNodeParentIdx;
			  currentNodeParentIdx = Math.floor(currentNodeIdx / 2);

			}
*/
	

	shiftNodeUp(node) {




		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
