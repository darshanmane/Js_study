function multiple5(num) {
    return num*5
}

multiple5.power = 2
console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);

function CreateUser(username, score) {
    this.username = username,
    this.score = score
    
}

CreateUser.prototype.increment = function () {
    this.score++
}
CreateUser.prototype.printme = function () {
    console.log(`score is ${this.score}`);
}

const suresh = new CreateUser("suresh",25)
const mahesh = new CreateUser("Mahesh",250)

suresh.printme()
  mahesh.increment()
  mahesh.printme()
