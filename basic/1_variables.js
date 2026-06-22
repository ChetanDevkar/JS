const account_id = 145
let account_email ="chetandevkar@gmail.com"
var account_password ="12345"
accountCity = "nashik"

//account_id = 2 not allowed

account_email="cd@gmail.com"
account_password="145"
accountCity="mumbai"
let accountState;

console.log(account_id);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([account_email,account_id,account_password,accountCity,accountState])
 