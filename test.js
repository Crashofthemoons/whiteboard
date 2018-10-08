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

