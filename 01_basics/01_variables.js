const accountId = 34566;
let accountEmail = "ekboteshrutika2002@gmail.com";
var accountPassword ="12345";
accountCity="jaipur";
let accountState; //"undefined" ,in this case we only initialize the variable but not declared.

// accountId = 5678; it is not possible in "const" to reassign the values.
accountEmail = "shrutika@2808202.com";
accountPassword = "678849";
accountCity="bengaluru";

/* prefer not to use "var" because of issue in
global scope and functional scope */

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

// instead of writing console for every variables ,we can take "console.table".

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
