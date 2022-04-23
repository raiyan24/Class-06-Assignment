//Create a Student Array Data Structure with 30 Students
const studentInfo = [
    ['Tawseef', 01, 05, 'One', 'Male', 'Dhaka', 1200],
    ['Raisa', 02, 8, 'One', 'Female', 'Dhaka', 1000],
    ['Anisha', 03, 7, 'One', 'Female', 'Dhaka', 950],
    ['Ayan', 04, 12, 'One', 'Male', 'Khulna', 800],
    ['Sameeha', 05, 15, 'One', 'Female', 'Chittagong', 700],
    ['Abdur', 06, 14, 'One', 'Male', 'Khulna', 750],
    ['Rounok', 07, 08, 'One', 'Male', 'Chittagong', 850],
    ['Emran', 01, 8, 'Two', 'Male', 'Rangpur', 2000],
    ['Sheikh', 02, 9, 'Two', 'Male', 'Rajshahi', 1500],
    ['Moushumi', 03, 8, 'Two', 'Female', 'Khulna', 1200],
    ['Raiyan', 04, 19, 'Two', 'Male', 'Sylhet', 1400],
    ['Oritree', 05, 9, 'Two', 'Female', 'Sylhet', 1400],
    ['Ferdous', 06, 16, 'Two', 'Male', 'Dhaka', 1200],
    ['Nujhat', 07, 18, 'Two', 'Female', 'Dhaka', 1300],
    ['Rahim', 01, 20, 'Three', 'Male', 'Borishal', 1250],
    ['Jahan', 02, 16, 'Three', 'Female', 'Rangpur', 1350],
    ['Tasneem', 03, 17, 'Three', 'Female', 'Dhaka', 1600],
    ['Hasan', 04, 26, 'Three', 'Male', 'Sylhet', 550],
    ['Ershad', 05, 18, 'Three', 'Male', 'Dhaka', 650],
    ['Rijan', 06, 21, 'Three', 'Male', 'Barishal', 750],
    ['Sheela', 07, 20, 'Three', 'Female', 'Dhaka', 650],
    ['Bina', 01, 20, 'Four', 'Female', 'Rangpur', 2500],
    ['Parul', 02, 24, 'Four', 'Female', 'Dhaka', 2530],
    ['Ali', 03, 16, 'Four', 'Male', 'Rangpur', 850],
    ['Shaheb', 04, 20, 'Four', 'Male', 'Dhaka', 2050],
    ['Nayeb', 05, 21, 'Four', 'Male', 'Borishal', 2950],
    ['Rizan', 06, 23, 'Four', 'Male', 'Dhaka', 3150],
    ['Shefali', 07, 22, 'Four', 'Female', 'Rajshahi', 850],
    ['Fatema', 08, 21, 'Four', 'Female', 'Rangpur', 1150],
    ['Rasel', 09, 22, 'Four', 'Male', 'Dhaka', 2050],  
];

/**
 * Assignment 01: Total Admnission fees
 */

let totalFees = 0;
let currency = 'TK';
studentInfo.sort().forEach( (data, index) => {
    console.log(`${index + 1}. Name : ${data[0]}. Fees : ${data[6]}`);
    totalFees += data[6];  
});
console.log(`===================================
Total Admission Fees : ${totalFees} ${currency}.`);

/**
 * Assignment 02 : Find All Female Students
 */

// console.log(`List of Female Students (Descending Order)
// =============================================`)
// studentInfo.sort().reverse().map( (item, i) => {
//     if(item[4] === 'Female'){
//         console.log(`${i+1}. Name : ${item[0]}, Gender: ${item[4]}`);
//     }
// })

/**
 * Assignment 03 : Find class wise student result
 */

// console.log(`All Student of Class : Four (Ascending Order)
// ==============================================`);
// studentInfo.sort().forEach( (name, index) => {
//     if( name[3] === 'Four'){
//         console.log(` ${index + 1}. Name : ${name[0]}, Class : ${name[3]}`);
//     }
// })

/**
 * Assignment 04 : - Location wise student result
 */

//  console.log(`Find All Students Lives in : Dhaka (Ascending Order)
// ====================================================`);
// studentInfo.sort().map( (item, i) => {
//     if( item[5] === 'Dhaka' ){
//         console.log(`${ i + 1}. Name : ${item[0]}, Location : ${item[5]}`);
//     }
// })

/**
 * Assignment 05 : find student between 10 - 25 age
 */

//  console.log(`Find All Students between 10 - 25 age (Descending Order)
// =======================================================`);
// studentInfo.sort().reverse().forEach( (item, index) => {
//     if( item[2] >= 10 && item[2] <= 25){
//         console.log(`${ index + 1}. Name : ${item[0]}, Age: ${item[2]}`);
//     }
// })
