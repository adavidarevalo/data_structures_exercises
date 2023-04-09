class Nodo {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

class Stack {
    head = null;
    length = 0;
    push(value) {
        const node = new Nodo(value);
        node.next = this.head;
        this.head = node;
    }
    pop() {
        if (this.isEmpty()) return null
        const value = this.head.value

        this.head = this.head.next;
        this.length--;

        return value;
    }
    peek() {
        if (this.isEmpty()) return null
        return this.head.value;
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return this.head == null;
    }
}

const s = new Stack();


console.log('IS EMPTY:', s.isEmpty());
s.push(1);
s.push(2);
s.push(3);
console.log('IS EMPTY:', s.isEmpty());
console.log('PEEK:', s.peek()); // 3
console.log('LEN:', s.size()); // 3


s.pop();
s.pop();
s.pop();
console.log('IS EMPTY:', s.isEmpty());
console.log('LEN:', s.size());