const data = [
    {
        name: 'Jason',
        gender: 'M',
        age: 27
    },
    {
        name: 'Rosita',
        gender: 'F',
        age: 23
    },
    {
        name: 'Leo',
        gender: 'M',
        age: 19
    }, 
    {
        name: 'zAlice',
        age: 15,
        gender: 'F'
    },
    {
        name: 'Zoe',
        age: 10,
        gender: 'F',
    },
    {
        name: 'Timmy',
        age: 12,
        gender: 'M',
    },
    {
        name: 'Michael',
        age: 31,
        gender: 'M',
    }
];

// const adult = [];
// data.forEach((e) => {
//     if (e.age > 18) {
//         adult.push(e);
//     }
// });
// const dospeli = data.filter((e) => e.age > 18);


// const srovnano = data.sort((a, b) => a.age - b.age);
// console.log(srovnano);

// let celkem = 0;
// data.forEach((e) => celkem += e.age);
// console.log(Math.round(celkem/data.length));

// const a = 'Dobrý';
// const b = 'Den';

// const pozdrav = a + b; // ES5 -> Nikdy !!!


// const pozdrav = `${a} ${b}`; // ES6

// const mapfunkce = data.map((e) => `${e.name} - ${e.gender}`);
// console.log(mapfunkce);

// function filterAndSort(array) {
//     return array
//         .filter((e) => e.gender === "F")
//         .sort((a,b) => a.age - b.age);
// }

// function filterAndSort(array) {
//     return array.filter((e) => e.name[0].toLowerCase === "Z" || e.name[0] === "z");
// }

// function filterAndSort(array) {
//     return array.filter((e) => ['z', 'Z'].includes(e.name[0]));
// }

// function filterAndSort(array) {
//     return array.filter((e) => ['z'].includes(e.name[0].toLowerCase()));
// }

// function filterAndSort(array, startingLetter) {
//     const pole = array.filter((e) => [startingLetter].includes(e.name[0].toLowerCase()));   
//     if (pole.length === 1) {
//         return pole.shift();
//     }
//     return pole;
// }

function filterAndSort(array, startingLetter) {
    const result = array.filter((e) => e.name[0].toLowerCase() === startingLetter);
    return result.length === 1 ? result[0] : result;
}

console.log(filterAndSort(data, "z"));

