// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments

describe ("shuffleArray", () => {
    test("given an array, remove the first item and shuffle the remaining", () => {
  expect(shuffleArray(colors1)).toContain("yellow", "blue", "pink", "green")
  expect(shuffleArray(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
    })
  })


var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.

//declare a function named shuffleArray
//.shift() is used to remove the value at the 0 index of the array
//for loop is uded to iterate 
//math.floor and math.random is used to get random elements in array

const shuffleArray = (array)=>{
    array === array.shift()
   for (var i = array.length - 1; i > 0; i--) {
       var rand = Math.floor(Math.random() * (i + 1));
       [array[i], array[rand]] = [array[rand], array[i]]
   }
    return array

}
console.log(shuffleArray(colors1));
console.log(shuffleArray(colors2));




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments

describe("minMax",() => {
    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order',() =>{
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
    })
})


 var nums1 = [3, 56, 90, -8, 0, 23, 6]
 // Expected output: [-8, 90]
 var nums2 = [109, 5, 9, 67, 8, 24]
 // Expected output: [5, 109]



// // b) Create the function that makes the test pass.

//declare a function named minMax
//declare variables maxValues and minValues to array[0]
//for loop for iterating the array length
//if and else if to check the max and min values in array

const minMax = (array) =>{
    let maxValues=array[0]
    let minValues=array[0]
 
    for (let i = 0; i < array.length; i++) {
      if(array[i] < minValues){
        minValues = array[i];
      }
      else if(array[i] >maxValues){
        maxValues = array[i];
      }
      }
    return [minValues,maxValues]
    
  }

  console.log(minMax(nums1));
  console.log(minMax(nums2));



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments

describe("duplicateValue",() => {
    it('function that takes in two arrays as arguments and returns one array with no duplicate',() => {
        expect(duplicateValue(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
})


var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
 // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



 // b) Create the function that makes the test pass.

 //declare a function named duplicateValue
 //declare variable named testArray3 
 //concat is used to combine the testArray1 and testArray2
 //for loop to iterate 
//.splice is used to change the contents of an array by romoving or replacing existing elements
const duplicateValue = (testArray1, testArray2)=>{
    var testArray3 = testArray1.concat(testArray2);
for (var i = 0; i < testArray3.length; ++i) {
    for (var j = i + 1; j < testArray3.length; ++j) {
        if (testArray3[i] === testArray3[j])
        testArray3.splice(j--, 1);
    }
}
return testArray3
}
