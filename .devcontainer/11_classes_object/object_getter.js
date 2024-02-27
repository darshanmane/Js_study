const user = {
    _email:"suresh@gmail.com",
    _pasword: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }

}


const suresh = Object.create(user)
console.log(suresh.email);