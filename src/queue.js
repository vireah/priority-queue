const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap =  new MaxHeap ();
		if ( maxSize == null){
			this.maxSize=30;
		}
		else{
			this.maxSize=maxSize;
		}
		
	}

	push(data, priority) {
		if (this.heap.size() < this.maxSize){
		this.heap.push(data, priority);
		}
		else {
			throw e;
		}

	
	}

	shift() {
		if (this.heap.size() ==0){
			 throw e;
		}

		this.heap.pop();

	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.size() ==0){
			return true;
		}
		else {
			return false;
		}
	}
}

module.exports = PriorityQueue;
