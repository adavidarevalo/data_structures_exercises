class HashNode {
    constructor(key, value) {
        this.next = null;
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    table = new Array(2);
    length = 0;

    hash(key) {
        return key.length % this.table.length;
    }
    set(key, value) {
        const index = this.hash(key);
        const foundNode = this.findNode(this.table[index], key);

        if (foundNode) {

        }
    }

    findNode(node, key) {
        while (node) {
            if (node.key === key) {
                return node;
            }
            node = node.next;
        }
        return null;
    }
}