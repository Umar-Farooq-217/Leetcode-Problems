import React from 'react'

export default function First() {
//     Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// -------------Answer------------

function sum(num,target){
for (let i = 0; i < num.length; i++) {
    var compliment =target - num[i]
    console.log('compliment',compliment);
    
    for (let j = i+1; j < num.length; j++) {
        if(num[j] == compliment){
            console.log(i,j);
            
        }
        
    }
    return []
    
}
}

var num = [2,7,11,15];
var target = 9
sum(num,target)
 
  return (
    <div>
    <h1 className='text-center text-4xl'>SUM OF TWO</h1>
    </div>
  )
}
