const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = [null]
	}

	push(data, priority) {
	
	}

	shift() {
		const first = this.first;
		this.first = this.first.next;
		return first;

	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.size() == 0;
	}
}

module.exports = PriorityQueue;
