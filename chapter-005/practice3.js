let company = ["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"];

//a
//company.splice(company[0],1)
company.shift(0)
console.log(company);

//b
company.splice(1,1,"Ola");
console.log(company);

//c
company.push("Amazon");
console.log(company);