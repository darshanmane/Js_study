function user(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,"email",{
        get: function(){ 
                return this._email.toUpperCase()
        },
        set: function(value){
                this._email = value
        }
    })
}

const suresh = new user("suresh@gmail.com","abc")
console.log(suresh.email);