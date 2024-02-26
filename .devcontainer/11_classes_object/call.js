function setusername(username ) {
    this.username = username;
    console.log("called");
}

function createUser(username, email,password) {
    setusername.call(this,username);
    this.email=email;
    this.password=password
    
}

const suresh = new createUser("suresh","suresh@fb.com","123")
console.log(suresh);