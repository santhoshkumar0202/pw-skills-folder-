class password {
    //properties
  constructor(name,password){
    this.name=name
    this._password=password
  }
  //checking and replacing with *
  get passwordcheck(){
    return this._password.replace(/./g,"*")
  }
  //setting the password
  set newpassword(newpassword){
    let has=/\d/.test(newpassword)
    let hasupper=/[A-Z]/.test(newpassword)
  
    if (newpassword.length>8 && has && hasupper){
        this._password=newpassword
    }else{
        console.log("It is not meeting the criteria of password ")
    }
  }
  // for execessing the private property
  get pass(){
console.log(this._password)
  }
  
}
//instanciate of class
let pass= new password("thurka","hello26")

console.log(pass.passwordcheck)
pass.newpassword="Thankyounkj123"
console.log(pass.password)// we cant access the private property like this

pass.pass// in this we can access the private key 