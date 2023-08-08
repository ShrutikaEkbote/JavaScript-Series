let score = "33"

console.log(typeof score);
console.log(typeof (score));

// (typeof score)=(typeof (score))

//1. datatype conversion from string to number 

let valueIsNumber = Number(score);
console.log(typeof valueIsNumber); //Number
console.log(valueIsNumber); // 33

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 ,false => 0


//2.datatype conversion from number and string to boolean

let IsLoggedin = 1

let booleanIsLoggedin = Boolean(IsLoggedin)
console.log(typeof booleanIsLoggedin) // BOOLEAN
console.log(booleanIsLoggedin) // True


// 1 => true ,0 => false
// " " => false
// " shrutika" => true


// 3.dataype conversion from number to string 
let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)  // STRING 
console.log(stringNumber) //33

//***********************OPERATIONS*******************************************

let value = 33
let negValue = -value
console.log(negValue)  // -33

console.log(2+2);
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2) // exponentiation


let gameCounter = 100
++gameCounter
console.log(gameCounter)

console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+ 2+2) // 122
console.log(2+3+"1") // 51
