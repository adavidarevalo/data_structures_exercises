class Nodo {
    constructor(value, priority) {
        this.next = null
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    head = null;
    length = 0;

    enqueue(value, priority = 1) {
        let newNode = new Nodo(value, priority)

        let ref = this.head

        if (ref === null) {
            this.head = newNode
            this.length++
            return;
        }
        let test = true;
        while (test) {
            if (!!ref?.next === false) {
                ref.next = newNode
                this.length++
                return;

            }
            if (ref.priority >= newNode.priority) {
                const t = ref.next
                ref.next = newNode
                ref.next.next = t
                this.length++
                return;
            }
            ref = ref.next
        }

    }
    print() {
        return JSON.stringify(this.head)
    }
}

const Queue = new PriorityQueue()

Queue.enqueue(1, 1)
Queue.enqueue(2, 2)
Queue.enqueue(1, 1)
Queue.enqueue(3, 3)
Queue.enqueue(3, 3)
Queue.enqueue(3, 3)
Queue.enqueue(1, 1)
Queue.enqueue(2, 2)
Queue.enqueue(2, 2)
Queue.enqueue(1, 1)
Queue.enqueue(2, 2)
Queue.enqueue(2, 2)
Queue.enqueue(3, 3)

console.log('Queue.print() ', Queue.print())