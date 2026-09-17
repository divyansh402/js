const myarr = [1, 2, 3, 4, 5];
// console.log(myarr[0]); 
myarr.push(6);
// console.log(myarr); 
//join
const myarr2 = myarr.join(",");
// console.log(myarr2);

// very important slice and splice 
const myarr3 =myarr.slice(1,3);
console.log(myarr3);
console.log(myarr);
const myarr4 = myarr.splice(1, 3);
console.log(myarr4);
console.log(myarr);