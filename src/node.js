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

		const temp = this.left;
		const temp3 = this.right;
		const temp2 = this.parent.parent; 
		const temp4  = this.parent ;

		if (this.parent.parent != null){
			
			if ( this.parent.parent.left==this.parent){
				this.parent.parent.left=this;
			}
			else if( this.parent.parent.right==this.parent){
					this.parent.parent.right=this;
			}
		}

	
	
		this.parent.parent = this;

		this.parent=temp2;
		
		if ( temp4.left!= this && temp4.left!=null){ 
			temp4.left.parent = this;
			
			
		}
		if ( temp4.right!=this && temp4.right!=null){
			temp4.right.parent= this;
			
		}
		if(temp4.left!=null){
			if (temp4.left==this){
			this.left = temp4;
			}
			else{
				this.left = temp4.left;
			}
			
		}


		if(temp4.right!=null){
			if (temp4.right==this){
				this.right=temp4;
				}
				else{
					this.right = temp4.right;
				}
			this.right= temp4.right;
		}
		
		

		if( temp!=null){
			temp4.left=temp;
		}
		if( temp3!=null){
			temp4.right=temp3;
		}

			 
	}
}

module.exports = Node;
