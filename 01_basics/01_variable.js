const accountId = 12345
let accountEmail = "abhyanshu@gmail.com"
var accountPassword = "12345#"
accountCity = "Patna" // js allows to declare variable without mentioning type of it (but shouldn't be use) 
let accountState

// accountId = 2 //constants can't be changed once declared (not allowed)

accountEmail = "abhi@google.com"
accountPassword = "54321#"
accountCity = "Delhi"

/*
prefer not to use var because of issue in Block scope and Functional Scope
*/

console.log(accountId); 
console.table([accountEmail,accountPassword,accountCity,accountState]);