class user{
    constructor(username){
        this.username=username;

    }

    logme(){
        console.log(`username ${this.username}`);
    }

   static createId(){
        return `123`
    }
}

const ram = new user("Ram")
// console.log(ram.createId());

class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email
    }
}

const one = new  teacher("Suresh","Suresh@fb.com")
console.log(one);
one.logme()