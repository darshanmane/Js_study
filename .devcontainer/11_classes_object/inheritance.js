class user{
        constructor(username){
            this.username=username;
    
        }

        logme(){
            console.log(`User name is ${this.username}`);
        }
    }

    class teacher extends user{
        constructor(username, email, password){
                   super(username)
                    this.email=email;
                    this.password=password; 
        }
        addcourse(){
            console.log(`A  new cousre was added by ${this.username}`);
        }
    }

    const suresh = new teacher("Suresh","suresh@fb.com","123")
    console.log(suresh);
    console.log(suresh.logme());

    console.log(suresh instanceof user);
    console.log(suresh instanceof teacher);