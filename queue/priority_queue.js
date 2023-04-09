function priorityQueue() {
    const items = [];

    this.enqueue = (element, priority = 1) => {
        let added = false;
        items.forEach((item, index) => {
            if (item.priority < priority && added === false) {
                items.splice(index, 0, { element, priority })
                added = true
            }
        })
        if (added === false) {
            items.push({ element, priority })
        }
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
        let printStr = ""
        let pipe = "|"

        items.forEach((item, index) => {
            if (index === items.length - 1) {
                pipe = ""
            }
            printStr += `${item.element}-${item.priority}${pipe}`

        })
        return printStr
    }

    this.clear = () => {
        items = []
    }
}

const Queue = new priorityQueue()

Queue.enqueue(1, 1)
Queue.enqueue(2, 2)
Queue.enqueue(3, 3)

console.log('Queue.print() ', Queue.print())