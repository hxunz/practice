class Friend {
  constructor(email) {
    this.email = email;
    this.friends = [];
  }    

  addFriendship(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  }

  canBeConnected(friend) {
    // Your code goes here
  }
}

const a = new Friend("A");
const b = new Friend("B");
const c = new Friend("C");

a.addFriendship(b);
b.addFriendship(c);

console.log(a.canBeConnected(c));