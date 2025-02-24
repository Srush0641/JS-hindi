const accountId = 144553
let accountEmail = "srushty60@gmail.com"
let accountState ;
var accountPassword = "12345"
accountcity = "Solapur"

//accountId = 2 not allowed

/*
prefer not to use var variable

becoz of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "234"
accountcity = "Kurnool"

console.log(accountId);
console.table([accountId ,accountEmail, accountPassword, accountcity, accountState])
