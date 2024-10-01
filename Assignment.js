let firstName=  prompt('Input your firstname in lowercase')
let surName=  prompt('Input your surname in lowercase')

let pickFirstNameInit=firstName.charAt(0)
let pickSecondNameInit=surName.charAt(0)
let bothName=pickFirstNameInit.concat(' ',pickSecondNameInit)
let pickFirstNameInitCap=pickFirstNameInit.toUpperCase()
let pickSecondNameInitCap=pickSecondNameInit.toUpperCase()
let bothNameCap=pickFirstNameInitCap.concat(" ",pickSecondNameInitCap)
console.log(bothNameCap)
console.log(bothName)

let firstNameOtherPart=firstName.substring(1,firstName.length)
let surNameOtherPart=surName.substring(1,surName.length)
let totalFirstName=pickFirstNameInitCap.concat(firstNameOtherPart)
let totalsurName=pickSecondNameInitCap.concat(surNameOtherPart)
let join=totalFirstName.concat(" ",totalsurName)
console.log(join)


let charLastChar=join.charAt(join.length-1)
let charSecLastChar=join.charAt(join.length-2)
let charSecLastCharCap=charSecLastChar.toUpperCase()
let substringJoin=join.substring(0,join.length-2)
console.log(substringJoin)

let totalJoin=substringJoin.concat(charSecLastCharCap,charLastChar)
console.log(totalJoin)

let lastChar=firstName.charAt(firstName.length-1)
let indexofLastChar=firstName.lastIndexOf(lastChar)
console.log(indexofLastChar)







// let a = 10;
// let b = 20;
// console.log(a<b && b==a)

// let x = 15
// let y = 30
// let z = 15
// console.log((x==z) && x< y)

// let score = 85
// // check ifscore is between 0 and 100
// console.log(0 <= score <= 100)

// let isSunny=true
// let isWeekend=false
// // checkif it is sunny and its weekend
// console.log(isSunny&&isWeekend)

// let hasTickets = false
// let isInvite = true
// console.log(hasTickets == isInvite)

// let isMember = false
// console.log(isMember)

// let isStudent = false
// let age = 23
// console.log(isStudent && age )

// let temprature = 23
// let isRaining =false
// let check = 20
// console.log(temprature > check && !isRaining)


// let char1 = "S"
// let char2 = "W"
// console.log(char1.charCodeAt("S") == char2.charCodeAt("W"))



// let balace=500
// let withdrawerAmount=1000
// console.log(balace > withdrawerAmount)

// let isAdult = true
// let hasLisence = true
// console.log(isAdult == hasLisence)

// let age = 500
// let membershipDuration = 7
// let ageGrater = 60
// let membershipDurationIsHigher = 5
// console.log(age > ageGrater && membershipDuration > membershipDurationIsHigher)

// let attendanceRate = 75
// let hasPassed = true
// let attendanceRateIsHigh = 75
// let PassedAllSubjet = true
// console.log(attendanceRate >= attendanceRateIsHigh  && hasPassed > PassedAllSubjet)

// let faviouriteColour = "yellow"
// console.log(faviouriteColour == "blue" || faviouriteColour == "green")





let a = 10;
let b = 20;
console.log(a<b && b==a);

let x = 15;
let y = 30;
let z = 15;
console.log(x == z && x < y);

let score = 85;
// check ifscore is between 0 and 100
console.log(0 <= score <= 100);

let isSunny = true;
let isWeekend = false;
// checkif it is sunny and its weekend
console.log(isSunny && !isWeekend);

let hasTickets = false;
let isInvited = true;
console.log(hasTickets == isInvited);

let isMember = false;
console.log(isMember);

let isStudent = false;
let age = 23;
console.log(isStudent && age );

let temprature = 23;
let isRaining =false;
let check = 20;
console.log(temprature > check && !isRaining);

let char1 = "a";
let char2 = "a";
console.log(char1.charCodeAt("a") == char2.charCodeAt("a"));

let balance=500;
let withdrawerAmount=1000;
console.log( withdrawerAmount < balance);

let isAdult = true;
let hasLisence = true;
console.log(isAdult == hasLisence);

let ages = 500;
let membershipDuration = 7;
let ageGrater = 60;
let membershipDurationIsHigher = 5;
console.log(ages > ageGrater && membershipDuration > membershipDurationIsHigher);

let attendanceRate = 75;
let hasPassed = true;
let attendanceRateIsHigh = 75;
let PassedAllSubjet = true;
console.log(attendanceRate >= attendanceRateIsHigh  && hasPassed > PassedAllSubjet);

let faviouriteColour = "blue";
console.log(faviouriteColour == "blue" || faviouriteColour == "green");








