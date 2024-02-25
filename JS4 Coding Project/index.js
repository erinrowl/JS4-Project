// 1.
var ages = [3, 9, 23, 64, 2, 8, 28, 93]

//Subtracting first element from last element
console.log(ages.pop() - ages.shift());

//Adding element to Array
ages.push(50);
console.log(ages.pop() - ages.shift());

//Loop to calculate average
var ages = [3, 9, 23, 64, 2, 8, 28, 93, 50]
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum / ages.length)

// 2. 

var friends = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
function avglength(friends) {
let sum = 0;
for (let i =0; i < friends.length; i++) {
    sum += friends [i].length;
}
return sum/friends.length
}
console.log(avglength(friends))

 // 3. Length property to access the last element of an array
let array = 0
 var last = array[array. length - 1]

// 4. Access first element through index of array
 var first = array[0]

// 5. 
var friends = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
var nameLengths =[3, 5, 3, 5, 4, 3];

for (let i = 0; i < friends.length; i++) {
    var nameLength = friends[i].length;
}
console.log(nameLengths)


//6.
var nameLengths = [3, 5, 3, 5, 4, 3];
function addAll (nameLengths) {
let sum = 0
    for (let i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i]; 
    }
    return sum
}
console.log(addAll(nameLengths))

//7. 
 function repeat(word, n) {
    let myString = ""
    for(let i =0; i < n; i++) {
        myString += word;
    }
    return myString;
 }

 console.log(repeat("Hello", 3))

//8.
var firstName = ""
var lastName = ""

function fullName (firstName, lastName) {
 }
 console.log('firstName'.concat('  ', 'lastName'));

 //9. 

var greaterArray = [5, 10, 15, 50, 75]
function hundred(greaterArray) {
let sum = 0
for (let i = 0; i < greaterArray.length; i++) {
    sum += greaterArray[i]; 
}
return "True"
}
console.log(hundred(greaterArray))



//10.
var myArray = [2, 5, 6, 10]
function mean(myArray) {
let sum = 0;
    for (let i =0; i < myArray.length; i++) {
        sum += myArray [i];
    }
    return sum/myArray.length
    }
    console.log(mean(myArray))

//11.

function compareAverages(arr1, arr2) {
    //Calculate the averages for both arrays
    const sum1 = arr1.reduce((acc, num) => acc + num, 0);
    const avg1 = sum1 / arr1.length;
  
    const sum2 = arr2.reduce((acc, num) => acc + num, 0);
    const avg2 = sum2 / arr2.length;
  
    return avg1 > avg2;
  }
  var array1 = [6, 4, 9, 11, 2]
  var array2 = [7, 3, 1, 8, 5]
  const result = compareAverages(array1, array2);
    console.log(result); 
    

//12.
 var moneyInPocket = 12
 var isHotOutside = true
 function willBuyDrink (isHotOutside, moneyInPocket) {
    if (moneyInPocket > 10.50 && isHotOutside) 
    return "True"
    }
    console.log(willBuyDrink(isHotOutside, moneyInPocket))
 

//13.
// Function determines whether user can afford item by taking in two parameters: amountOfMoney and price, and comparing both numbers.
var amountOfMoney = 20
var price = 15
function findBalance(amountOfMoney, price) {
    if (amountOfMoney >= price) {
        return "Let's Buy it!"
    }
    return "Not enough money."
}
console.log(findBalance(amountOfMoney, price)) 
 