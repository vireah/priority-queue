class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
   		this.right = null;
		this.parent = null;
		this.child = null;
		this.next = null;  
	}

	appendChild(node) {
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
		} else throw e;
	}

	remove() {
		if(this.parent==null){
			return;
		} else{
		 this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent==null){
			return;
		}

		const temp = this.parent.left;// save parent
		const temp3 = this.parent.right;
		const temp2 = this.parent.parent; //save child
		//this.parent = this.parent.parent;
		//this.parent.parent = temp;
		this.parent.left = null;
		this.parent.parent =this;
		this.left = temp;
		this.right = temp3;
		this.parent = temp2;
		
		//this.parent = null;
		 // save child node in parent property
		

		
		/*
		 if(this.parent.parent.left==this.parent){
			 this.parent.parent.left=this;
			
		 }
		else if (this.parent.parent.right==this.parent){ 
			 this.parent.parent.right=this;
			 
		 }
		let ri=this.right;
		let le=this.left;

		 if(this.parent.left==this){
			
			this.left=this.parent;
			this.right=this.parent.right;
		   
		}
	   else if (this.parent.right==this){ 
			this.right=this.parent;
			this.left= this.parent.left;
			
		}
		this.parent.left=le;
		this.parent.right=ri;
		
		
			 this.parent=this.parent.parent;
			 this.parent.parent= this;

			 
		const parent1= this.parent.parent;
		this.parent.parent=this;
		this.paren= parent1;
			 
		*/
			 
	}
}

module.exports = Node;
