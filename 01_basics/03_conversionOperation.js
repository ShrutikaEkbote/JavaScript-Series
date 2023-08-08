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

//postfix increment 
let y = 10 //11
let x = y++ // 10

// postfix decrement
let y = 10  // 9
let x = y-- // 10

// prefix increment
let y = 10  //  11
let x = ++y // 11

// prefix decrement
let y = 10 // 9
let x = --y // 9


// 1 .Equal (==) and Strict Equal (===):
//The equal operator (==) compares two values for equality. The strict equal operator (===) not only checks if the values are equal but 
also ensures that their data types are the same.

5 == '5';   // true (values are equal)
5 === '5';  // false (values are equal, but data types are different)

// 2.Not Equal (!=) and Strict Not Equal (!==):
//The not equal operator (!=) checks if two values are not equal. The strict not equal operator (!==) checks for both inequality and 
different data types.

5 != '7';   // true (values are not equal)
5 !== '5';  // true (values are equal, but data types are different)

// Logical AND (&&):

//The logical AND operator (&&) returns true if both operands are true. Otherwise, it returns false.

true && true;   // true
true && false;  // false

// Logical OR (||):

// The logical OR operator (||) returns true if at least one of the operands is true. It returns false if both operands are false.

true || false;   // true
false || false;  // false

// Logical NOT (!):

// The logical NOT operator (!) returns the opposite Boolean value of its operand.

!true;   // false
!false;  // true

 
