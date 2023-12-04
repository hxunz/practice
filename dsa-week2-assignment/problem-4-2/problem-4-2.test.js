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

const solution = (people, remove) => {
  const linkedList = new LinkedList();

  for (let i = 1; i <= people; i++) {
    linkedList.append(i);
  }

  let currentNode = linkedList.head;
  while (linkedList.length > 1) {
    for (let i = 0; i < remove - 1; i++) {
      currentNode = currentNode.next ? currentNode.next : linkedList.head;
    }

    const nextNode = currentNode.next ? currentNode.next : linkedList.head;
    linkedList.delete(currentNode.value);
    currentNode = nextNode;
  }

  return linkedList.head.value;
};

test('N명의 사람이 있을 때 M번째 사람을 없앨 때 마지막에 죽는 사람의 순서를 반환한다', () => {
  expect(solution(7, 3)).toEqual(4);
  expect(solution(7, 2)).toEqual(7);
  expect(solution(10, 3)).toEqual(4);
});