// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// [1,1,3] ==> 3
// [2,2,2,4,2] ==> 4

let nums = [2,2,2,4,2];

function diffNum(nums) {


    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[0]) {
            let singlenum = nums[i];
            console.log(singlenum);
        }

    };

};

diffNum(nums);


//Create a function add(n)/Add(n) which returns a function that always adds n to any number
//addOne(3); // 4
//var addThree = add(3);
//addThree(3); // 6```

function add(n) {
    n + 1;
    console.log(n);
};

add(3);
let addThree = (n) => add(n);
addThree(3);

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function result(bool) {
    let yes ="Yes";
    let no = "No";
    if(bool) {
        console.log(yes);
    } else {
        console.log(no);
    }
};

result(true);
result(false);

//Create a function that takes 2 numbers in form of a string as an input, and outputs the sum (also as a string)
//(https://www.codewars.com/kata/sum-the-strings)

num1 = "1";
num2 = "2";

function sum(one, two) {
    let numOne = parseInt(one);
    let numTwo = parseInt(two);
    let sumsum = numOne + numTwo;
    let final = sumsum.toString();
    console.log(final);
};

sum(num1, num2);

//Write a closure in JavaScript to implement a private state for a Student object that contains SSN, GPA, and Grades.

let Student = {
    "Grades": "A",
    "GPA": 4.1,
    "SSN": (function () {
        let SSN = 675321267;
         return function () {
            return SSN;
        };
    })()
};

Student.SSN();

//Given a list of words, determine if any of them are palindromes

let words = ["anna", "racecar", "poop", "Brett", "Jenn", "no"];
let palindromes = [];

function isItAPalindrome(array) {
    array.forEach(word => {
        let reversed = "";
        for (var i = word.length - 1; i >= 0; i--){
            reversed += word[i];
        }
        console.log(reversed, word)
        if (reversed === word){
            palindromes.push(reversed);
        }
    });
    console.log(palindromes);
}

isItAPalindrome(words);

//Write code that outputs the Fibonacci series
let fibon = [0,1];

function fibonacciSeries(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i], array[i+1])
        let number = array[i] + array[i+1];
        array.push(number);
    }
};
//fibonacciSeries(fibon);

//Implement FizzBuzz on 3 fizz on 5 buzz on both, fizzbuzz

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
        console.log("FizzBuzz");
    } else if (numbers[i] % 5 === 0) {
        console.log("Buzz");
    } else if (numbers[i] % 3 === 0) {
        console.log("Fizz");
    }
}

//create a function that removes the first and last characters of a string.

let string = "alejandro";

function remove(string) {
    let array = string.split('');
    array.pop();
    array.shift();
    string = array.join("");
    console.log(string);
};

remove(string);