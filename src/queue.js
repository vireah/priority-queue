const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = this.MaxHeap;
		this.maxSize = this.maxSize;
	}

	push(data, priority) {
		MaxHeap.push();
	}

	shift() {
		const first = this.first;
		this.first = this.first.next;
		return first;

	}

	size() {
		return this.maxSize;
	}

	isEmpty() {
		return this.size() == 0;
	}
}

module.exports = PriorityQueue;
