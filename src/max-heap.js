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
	
		if(this.root==null){	
			return;
		}
		
		
		const detached = this.detachRoot();
	//	this.restoreRootFromLastInsertedNode(detached);
	//	this.shiftNodeDown(this.root);
		return detached.data;

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

		if(  this.root.right==null || this.root.left.priority >  this.root.right.priority){
			
			this.root=this.root.left;
			this.root.right= rooty.right;
		}
		else {
			this.root=this.root.right;
			this.root.left= rooty.left;
			console.log("    -----    ");
		}
		this.nodes.shift();
		return rooty;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		const temp = this.parentNodes.pop();
		const temp2= this.root;
		this.root= temp;
		this.root.left = temp2;
		this.root.left.parent=this.root;
		this.nodes.pop();
		this.nodes.unshift(temp);
		const idx = this.nodes.indexOf(this.parentNodes[0]);

		if(this.nodes.length %2==0 || this.nodes.length==1){

			this.parentNodes.unshift(this.nodes[idx-1]);
		}
		
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

			if( node.parent.left == null){
				node.parent.left=node;
				//console.log(node.parent.priority+ "  "+node.priority);
				
			}
			else {
				node.parent.right=node;
				
			}
		
			
		}
	}
	
	

	shiftNodeUp(node) {
		
		if(node.parent==null){
			if(this.root!=node){
				this.root=node;
				//console.log(this.root.priority);
			}
			return;
		}
		
		 
		if (node.priority > node.parent.priority){
		
			const ind1 = this.nodes.indexOf(node);
			const ind2 = this.nodes.indexOf(node.parent);
			this.nodes[ind1] = node.parent;
			this.nodes[ind2] = node;
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
			

			const ind1 = this.nodes.indexOf(node);
			const ind2 = this.nodes.indexOf(node.left);
			this.nodes[ind1] = node.left;
			this.nodes[ind2] = node;

			const index1 = this.parentNodes.indexOf(node);
			const index2 = this.parentNodes.indexOf(node.left);

			if( index1 != -1){
				this.parentNodes[index1]=node.left;
				this.parentNodes[index2]=node;
			}
			else {
				if(index2!=-1){
					this.parentNodes[index2]=node;
					
				}
				
				if(this.root==node){
					this.root=node.left;
				}
				
				
				
			}
				node.left.swapWithParent();
				this.shiftNodeDown(node);	
				return ; 
		
		}
	 if  ((node.left==null  && node.priority < node.right.priority )||(node.left.priority < node.right.priority && node.priority < node.right.priority) ){
		
		const ind1 = this.nodes.indexOf(node);
		const ind2 = this.nodes.indexOf(node.right);
		this.nodes[ind1] = node.right;
		this.nodes[ind2] = node;

		const index1 = this.parentNodes.indexOf(node);
		const index2 = this.parentNodes.indexOf(node.right);
		if( index1 != -1 && index2!=-1){
			this.parentNodes[index1]=node.right;
			this.parentNodes[index2]=node;
		}
		else {
			
			if(index2!=-1)
			{
				this.parentNodes[index2]=node;
				
			}
			if(this.root==node){
				this.root=node.right;
			}
			
			
			
			
		}
			node.right.swapWithParent();
			this.shiftNodeDown(node);
			return;
		}
		

		
	}
}

module.exports = MaxHeap;
