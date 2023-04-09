function queue() {
    let items = []
    this.enqueue = element => {
        items.push(element)
    }
    this.dequeue = () => {
        return items.shift()
    }

    this.front = () => {
        return items[0]
    }

    this.hasElements = () => {
        return items.length > 0
    }

    this.size = () => {
        return items.length
    }

    this.print = () => {
        return items.toString()
    }

    this.clear = () => {
        items = []
    }
}

const Queue = new queue()

Queue.enqueue(1)
Queue.enqueue(2)
Queue.enqueue(3)

console.log('Queue.print() ', Queue.print())