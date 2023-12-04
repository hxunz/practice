class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = this.head.next;
          if (this.length === 1) {
            this.tail = null;
          }
        } else if (currentNode === this.tail) {
          this.tail = prevNode;
          this.tail.next = null;
        } else {
          prevNode.next = currentNode.next;
        }

        this.length--;
        break;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const linkedList = new LinkedList();

test('연결리스트에 요소를 추가한다', () => {
  linkedList.append(10);
  expect(linkedList.toArray()).toEqual([10]);
});

test('연결리스트에서 요소를 제거한다', () => {
  linkedList.delete(10);
  expect(linkedList.toArray()).toEqual([]);
});

test('연결리스트가 비어있는지 확인한다', () => {
  expect(linkedList.isEmpty()).toBe(true);
  linkedList.append(10);
  expect(linkedList.isEmpty()).toBe(false);
  linkedList.delete(10);
  expect(linkedList.isEmpty()).toBe(true);
});
