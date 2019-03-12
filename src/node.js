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
		//if(!this.right && !this.left ){
			//this.parent = node;
		//}
		if ( this.left == null || this.left==node){
			this.left=node;
			node.parent=this;
		}
		else {
			if(this.right==null){
			this.right=node;
			node.parent=this;
			}
			
		}
	}

	removeChild(node) {
	
		
		if ( this.left==node){
			 this.left=null;
			 node.parent=null;
			 return;
		}
		if( this.right== node){
				this.right=null;
				node.parent=null;
			return;
		}

		else throw e;
		
		
	}

	remove() {
		if(this.parent==null){
			return;
		}
		else{
		 this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent==null){
			return;
		}
		//const temp = this.parent;
	//	this.left.parent=this.parent;
	//	this.right.parent=this.parent;
		
		/*if(this.parent.left==this){	
			this.parent.right = this.right;
			this.parent.left=this.left;
			this.left=this.parent;
			
		}
		else if( this.parent.right==this){
			this.parent.right = this.right;
			this.parent.left=this.left;
			this.right=this.parent;
		}
		*/
		

		 if(this.parent.parent.left==this.parent){
			 this.parent.parent.left=this;
			
		 }
		else if (this.parent.parent.right==this.parent){ 
			 this.parent.parent.right=this;
			 
		 }
		
			 this.parent=this.parent.parent;
			 

			 
	}
}

module.exports = Node;
