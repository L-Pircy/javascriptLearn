const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// // ForEach
// companies.forEach(function (company) {
//     console.log(company.name);
// });

// // Filter
// let canDrink1 = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink1.push(ages[i]);
//     }
// }
// // or
// const canDrink2 = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// });
// // or
// const canDrink3 = ages.filter(age => age >= 21);

// console.log(canDrink1);
// console.log(canDrink2);
// console.log(canDrink3);


// // Filter Retail Companies
// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// });

// const retailCompanies2 = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);
// console.log(retailCompanies2);

// // Get 80s comoanies
// const eightiesCompanies = companies.filter(eighties => eighties.start < 1990);
// console.log(eightiesCompanies);

// // Map
// // Create array of company names
// const companyNamesTime = companies.map(function (company) {
//     return `${company.name} [${-company.start + company.end}]`;
// });

// const companyNamesTime2 = companies.map(company => `${company.name} [${- company.start + company.end}]`);

// console.log(companyNamesTime);
// console.log(companyNamesTime2);

// // square of ages
// // const agesSquare = ages.map(age => Math.sqrt(age));
// const agesSquare = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2); //first squares then doubles
// console.log(agesSquare);

// // Sort
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });//complicated but basically 1 returen for what we want

// const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompanies);
// console.log(sortedCompanies2);

// sort ages
// const sortAges = ages.sort(); //normally doing sorts it by 1st no like 23 4 56
// const sortAges2 = ages.sort((a, b) => (a > b ? 1 : -1));
// console.log(sortAges);
// console.log(sortAges2);


// // Reduce
// // add all ages either by for loop or by reduce
// // for
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// const ageSum2 = ages.reduce(function (total, age) {
//     return total + age;
// }, 0);

// const ageSum3 = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);
// console.log(ageSum2);
// console.log(ageSum3);


// Using these functions combined

const combned = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
console.log(combned);

document.write(combned);