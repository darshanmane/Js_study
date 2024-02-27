class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
            this._email = value
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Suresh`
    }

    set password(value){
        this._password =value
    }
}

const suresh = new user("suresh@gmail.com","abc")
console.log(suresh.password);
console.log(suresh.email);