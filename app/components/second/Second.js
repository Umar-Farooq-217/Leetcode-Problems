import React from 'react'

export default function Second() {
//     Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.






// -------------Answer---------------

function palindromeNumber(num){
var number = parseInt(num.toString().split('').reverse().join(''))
if(number === num){
  console.log('Yes this is Palindrome Number');
  return true
  
}
else{
  console.log('No this is not Palindrome');
  return false
}

}
var num = 12321
console.log(palindromeNumber(num));


  return (
    <div>
          <h1 className='text-center text-4xl'> Palindrome Number</h1>

    </div>
  )
}
