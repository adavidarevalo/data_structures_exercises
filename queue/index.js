class Nodo {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

class Queue {
    head = null
    length = 0

    enqueue(value) {
        const node = new Nodo(value)
        let ref = this.head
        if (ref === null) {
            this.head = node
            this.length++
            return node.value
        }
        while (ref?.value || ref?.next === null) {
            if (ref.next === null) {
                ref.next = node
                this.length++
                return
            }
            ref = ref.next
        }
    }

    dequeue() {
        if (this.isEmpty()) return null
        let ref = this.head;
        this.head = ref.next

        this.length--
        return ref.value
    }
    peek() {
        if (this.isEmpty()) return null
        return this.head.value

    }
    size() {
        return this.length
    }
    print() {
        return JSON.stringify(this.head)
    }
    isEmpty() {
        return this.head === null
    }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue()

console.log('queue ', queue.size())
console.log('queue ', queue.print())
