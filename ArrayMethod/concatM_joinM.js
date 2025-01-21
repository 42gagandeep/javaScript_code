//Yeh method existing arrays ko modify nahi karta, 
//balki ek naya array return karta hai jo sab joined arrays ko contain karta hai.
//Syntax: array1.concat(array2, array3, ..., arrayX)

//1. Do Arrays Ko Concatenate Karna:
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin"];
//const concatArray = arr1.concat(arr2);
const concatArray = arr1.concat(arr2, arr3);
console.log(concatArray);

//2. Values Ko Array Mein Concatenate Karna:
let letters = ["a", "b", "c"];
let alphaNumeric  = letters.concat(1, [2,3]);
console.log(alphaNumeric);

//3.Concatenating Strings:
let str1 = "Hello";
let str2 = "World";
let Result = str1.concat(' ', str2)
console.log(Result);

//4.Concatenating Nested Arrays:
let arrr1 = [[1]];
let arrr2 = [2, [3]];
let Result1 = arrr1.concat([],arrr2)
console.log(Result1);

//5.Concatenating with Empty Arrays:
let arr4 = [1, 2, 3];
let arr5 = [];
let result = arr5.concat(arr4); //no problm ni swaping
console.log(result);
// Result: [1, 2, 3]




//JavaScript mein join method ka use array ke sabhi elements ko ek string mein combine karne ke liye hota hai.
//Aap ek separator specify kar sakte hain jo elements ke beech mein aayega.
//and yeh naya string return krta ha

//ex1
let joinFruits = ["Apple", "Banana", "Mango"];
// join() method bina separator ke use karte hain (default comma hota hai)
let joinResult = joinFruits.join();
console.log(joinResult);
console.log(joinFruits);

// join() method custom separator ke saath use karte hain
let joinResult1 = joinFruits.join(' aur ');
console.log(joinResult1);