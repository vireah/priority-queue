const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.nodes=[];
		
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		
	}

	pop() {
		//console.log("root============",this.root);
		//console.log("parentNode==========",this.parentNode);
		//console.log("nodes===========",this.nodes);
		if(this.root==null){	
			return;
		}
		//this.detachRoot();
		const t = this.root.data;
		this.detachRoot();
		//return this.root.data;
		return t;

	}

	detachRoot() {
		const  rooty = this.root;
		if ( this.size() ==1){
			this.parentNodes.shift()
			this.root = null;
			return rooty;
		}
		if( this.size()%2 ==0){
				this.parentNodes.shift();
		}
		this.root=this.root.left;
		return rooty;
		
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
			this.root=node;
			this.nodes.push(node);
			this.parentNodes.push(node);
		
		}
		else {

			if ( this.size()%2!=0){
				this.parentNodes.push(node)
			}
			else {
				this.parentNodes.shift();
				this.parentNodes.push(node);
			}
			this.nodes.push(node);
			let currentNodeIdx = this.size() - 2;
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
	
	

	shiftNodeUp(node) {
		
		if(node.parent==null){
			if(this.root!=node){
				this.root=node;
			}
			return;
		}
		
		 
		if (node.priority > node.parent.priority){
		
			const index1 = this.parentNodes.indexOf(node);
			const index2 = this.parentNodes.indexOf(node.parent);
			if( index2 != -1){
				this.parentNodes[index1]=node.parent;
				this.parentNodes[index2]=node;
			}
			else {
				this.parentNodes[index1]=node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
			return;
		}
			
			
			
		
		



		
	}

	shiftNodeDown(node) {
		if(node.left==null && node.right==null){
			return;
		}
	
		
		if ((node.right==null  && node.priority < node.left.priority )||( node.left.priority > node.right.priority && node.priority < node.left.priority)) {
			const index1 = this.parentNodes.indexOf(node);
			const index2 = this.parentNodes.indexOf(node.left);
			if( index1 != -1){
				this.parentNodes[index1]=node.left;
				this.parentNodes[index2]=node;
			}
			else {
				this.parentNodes[index2]=node;
				this.root=node.left;
			}
				node.left.swapWithParent();
				this.shiftNodeDown(node);	
				return ; 
		
		}
	 if  ((node.left==null  && node.priority < node.right.priority )||(node.left.priority < node.right.priority && node.priority < node.right.priority) ){
		const index1 = this.parentNodes.indexOf(node);
		const index2 = this.parentNodes.indexOf(node.right);
		if( index1 != -1){
			this.parentNodes[index1]=node.right;
			this.parentNodes[index2]=node;
		}
		else {
			this.parentNodes[index2]=node;
			this.root=node.right;
		}
			node.right.swapWithParent();
			this.shiftNodeDown(node);
			return;
		}
		

		
	}
}

module.exports = MaxHeap;
