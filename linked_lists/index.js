function List() {
    this.head = null;
}

function Nodo(value) {
    this.value = value;
    this.next = null
}

List.prototype.add = function (value) {
    if (this.head === null) {
        this.head = new Nodo(value);
        return
    }
    let ref = this.head
    while (!!ref.next) {
        ref = ref.next;
    }
    ref.next = new Nodo(value)
}

List.prototype.search = function (value) {
    let ref = this.head

    while (!!ref.value) {
        if (ref.value === value) return true

        ref = ref.next;
    }
    return false
}

List.prototype.combine = function (list1, list2) {
    const listResult = new List();

    let ref1 = list1.head;
    let ref2 = list2.head;

    while (!!ref2) {
        listResult.add(ref1.value)
        listResult.add(ref2.value)
        ref1 = ref1.next;
        ref2 = ref2.next;
    }

    return listResult
}

List.prototype.update = function (value, newValue) {
    let ref = this.head

    while (!!ref?.value) {
        if (ref.value === value) {
            ref.value = newValue
            return true
        }
        ref = ref.next;
    }
    return false
}

List.prototype.updateNodo = function (value, nodo) {
    let ref = this.head

    while (!!ref.value) {
        if (ref.value === value) {
            const ref2 = ref.next.next
            ref = nodo
            ref.next = ref2
            return true
        }
        ref = ref.next;
    }
    return false
}

List.prototype.length = function () {
    let ref = this.head
    let counter = 0;

    while (!!ref?.value) {
        counter++
        ref = ref.next;
    }
    return counter
}


List.prototype.getNode = function (value) {
    let ref = this.head

    while (!!ref.value) {
        if (ref.value === value) return ref

        ref = ref.next;
    }
    return false
}


const list1 = new List();

list1.add("David")
list1.add("Arevalo")
list1.add("Jose")
const searchByName = list1.search("David")

const list2 = new List();
list2.add("David2")
list2.add("Arevalo2")
list2.add("Jose2")

const newList = list1.combine(list1, list2)

newList.update('David', "PEPE")

console.log("length ", newList.length())


console.log('newList ', newList)
