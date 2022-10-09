//1. Write a ts program to read and print elements of array.
// var num:number[] = [10,20,30];
// var i:number;
// for( i =0; i<num.length; i++)
// {
//     console.log(num[i])
// }
//2. Write a ts program to print all negative elements in an array.
// var num:number[] = [10,-3,-5,25]
// var i:number;
// for( i =0; i<num.length; i++)
// {   
//     if(num[i]<0)
//     console.log(num[i])
// }
// 3. Write a ts program to find sum of all array elements.
// var num:number[] = [10,30,5,25]
// var i:number;
// var sum:number = 0
// for( i =0; i<num.length; i++)
// {   
//     sum = sum + num[i]
// }
// console.log('sum is '+ sum)
// 4. Write a ts program to find maximum and minimum element in an array
// let arr:number[] = [100, 40, 50,30,19,9,2]
// console.log(Math.max(...arr))
// console.log(Math.min(...arr)) 
// 5. Write a ts program to find second largest element in an array.
// var num:number[] = [10,3,5,25]
// var i:number;
// var largest:number
// for( i =0; i<num.length; i++)
// {   
//     if(num[i] => num[i+1])
//     {
//        console.log(num[i]) 
//     }
// }
// 6. Write a ts program to count total number of even and odd elements in an array.
// var num:number[]= [10,15,20,25,30,11,13]
// var even:number = 0
// var odd:number = 0
// for (let index = 0; index < num.length; index++)
//  {
//     if(num[index] %2==0)
//     even = even + 1
//     else
//     odd = odd + 1
// }
// console.log('even = ' + even)
// console.log('odd = ' +odd)
Problem No. 07
--------------------
Negative Element in the Array`)
totalnegtElemInArray()

/*---8. Write a ts program to copy all elements from an array to another array.--- */
function copyElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    let copyOfiArray: number[] = iArray

    console.log(`Original Array = [${iArray}]
Copy of Array  = [${copyOfiArray}]`)
}
console.log(`
--------------------
    Problem No. 08
--------------------
Negative Element in the Array`)
copyElemInArray()

/*---9. Write a ts program to insert an element in an array.--- */
function insertElemInArray() {
    let iArray: number[] = [1, -8, 5, -3, 4, -5, 6, -4]
    console.log(`Original Array's Elements = [${iArray}]`)

    iArray.push(1000)

    console.log(`New Array's Elements = [${iArray}]`)
}
console.log(`
--------------------
    Problem No. 09
--------------------
insert an element in array`)
insertElemInArray()

/*---10. Write a ts program to delete an element from an array at specified position.--- */
function deletElemInArray() {
    let iArray: number[] = [1, 8, 5, 3, 4, 5, 6, 4]
    console.log(`Original Array's Elements = [${iArray}]`)

    iArray.splice(5, 1)

    console.log(`New Array's Elements = [${iArray}]
element is delete from inex 5`)
}
console.log(`
--------------------
    Problem No. 10
--------------------
delete an element from an array at specified position`)
deletElemInArray()

/*---11. Write a ts program to count frequency of each element in an array.--- */
function countFrqInArray() {
    let iArray: number[] = [1, 8, 5, 8, 4, 5, 8, 4]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = ${iArray}`)

    for (let key in obj) {
        console.log(`Frequency of "${key}" = ${obj[key]}`)
    }
}
console.log(`
--------------------
    Problem No. 11
--------------------
count frequency of each element`)
countFrqInArray()
/*---12. Write a ts program to print all unique elements in the array.--- */
function uniqElemInArray() {
    let iArray: number[] = [1, 8, 3, 5, 8, 5, 4]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = ${iArray}`)

    let uniqElem = []

    for (let key in obj) {
        if (obj[key] == 1) {
            uniqElem.push(key)
        }
    }

    let uniqElemToNum: number[] = uniqElem.map(element => parseInt(element)) // Convert string to number

    console.log(`all unique elements = ${uniqElemToNum}`)
    // console.log(`all unique elements = ${uniqElemToNum[0] + uniqElemToNum[1]}`)
}
console.log(`
--------------------
    Problem No. 12
--------------------
all unique elements in array`)
uniqElemInArray()

/*---13. Write a ts program to count total number of duplicate elements in an array.--- */
function duplicatElemInArray() {
    let iArray: number[] = [1, 8, 5, 8, 4, 5, 8, 4]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = ${iArray}`)

    let dublicatNumAsString: string[] = []

    for (let key in obj) {
        if (obj[key] > 1) {
            // console.log(`duplicate element "${key}" = ${obj[key]}`)
            dublicatNumAsString.push(key)
        }
    }

    let dublicatNumAsNumber: number[] = dublicatNumAsString.map(element => parseInt(element)) // Convert string to number

    console.log(`Total Dublicate Elements  [${dublicatNumAsNumber}] = ${dublicatNumAsNumber.length}`)
}
console.log(`
--------------------
    Problem No. 13
--------------------
duplicate elements in array`)
duplicatElemInArray()

/*---14. Write a ts program to delete all duplicate elements from an array.--- */
function deleteDuplicatElem() {
    let iArray: number[] = [1, 8, 5, 8, 4, 5, 3, 9]
    let obj = {}

    for (let i: number = 0; i < iArray.length; i++) {
        let char: number = iArray[i]

        if (obj[char] == undefined) {
            obj[char] = 1
        }
        else {
            obj[char]++
        }
    }

    console.log(`Array's Elements = [${iArray}]`)

    let deleteDublicatNumAsString: string[] = []

    for (let key in obj) {
        if (obj[key] < 2) {
            deleteDublicatNumAsString.push(key)
        }
    }

    let dublicatNumAsNumber: number[] = deleteDublicatNumAsString.map(element => parseInt(element)) // Convert string to number

    console.log(`After delete Elements  = [${dublicatNumAsNumber}]`)
}
console.log(`
--------------------
    Problem No. 14
--------------------
delete all duplicate elements from an array`)
deleteDuplicatElem()

/*---15. Write a ts program to merge two array to third array.--- */
function merge2Array() {
    let iArray01: number[] = [1, 8, 5, 3, 4, 5, 6, 4]
    let iArray02: number[] = [19, 98, 85, 43, 54, 35, 26, 15]

    let iArray03: number[] = iArray01.concat(iArray02)

    console.log(`1st Array = [${iArray01}]
2nd Array = [${iArray02}]
Merged Array = [${iArray03}]`)

}
console.log(`
--------------------
    Problem No. 15
--------------------
merge two array to third array`)
merge2Array()
/*---16. Write a ts program to find reverse of an array.--- */
function reverseArray() {
    let iArray01: number[] = [1, 8, 5, 3, 4, 7, 6, 9]
    console.log(`Original Array = [${iArray01}]`)

    let iArray02: number[] = iArray01.reverse()
    console.log(`Reversed Array = [${iArray02}]`)

}
console.log(`
--------------------
    Problem No. 16
--------------------
reverse of an array`)
reverseArray()

/*---17. Write a ts program to put even and odd elements of array in two separate array.--- */
function separateEvenOddArray() {
    let iArray: number[] = [1, 8, 5, 3, 4, 7, 6, 10]
    console.log(`Original Array = [${iArray}]`)

    let evenArray: number[] = []
    let oddArray: number[] = []

    iArray.forEach(e => {
        if (e % 2 == 0) {
            evenArray.push(e)
        }
        else {
            oddArray.push(e)
        }
    })

    console.log(`Even Array = [${evenArray}]`)
    console.log(`Odd Array = [${oddArray}]`)
}
console.log(`
--------------------
    Problem No. 17
--------------------
even and odd elements of array in two separate array`)
separateEvenOddArray()

/*---18. Write a ts program to search an element in an array.--- */
function searchElemInArray() {
    let iArray: number[] = [1, 8, 5, 3, 7, 9, 6, 4]
    console.log(`The Array = [${iArray}]`)

    let searchElem: number = 8
    console.log(`Search Element = ${searchElem}`)

        for (let char in iArray) {
            if (iArray[char] == searchElem) {
                var present:number = iArray[char]
                console.log(`The Element (${searchElem}) is "Present"`);
                break;
            }
        }
        if (!(present)) {
            console.log(`The Element (${searchElem}) is "Not Present"`)
        }
        // console.log(typeof(present))
}
console.log(`
--------------------
    Problem No. 18
--------------------
search an element in the Array`)
searchElemInArray()

/*---19. Write a ts program to sort array elements in ascending or descending order.--- */
function sortElemInArray() {
    let iArray: number[] = [1, 8, 5, 3, 7, 9, 6, 4, 2, 10]
    console.log(`The Array [${iArray}]`)
    console.log(`The Array in Ascending order  [${iArray.sort((a , b) => {return a-b})}]`)
    console.log(`The Array in Descending order [${iArray.sort((a , b) => {return b-a})}]`)
}
console.log(`
--------------------
    Problem No. 19
--------------------
search an element in the Array`)
sortElemInArray()

