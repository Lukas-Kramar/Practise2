// const object = {
//     name: 'John',
//     surname: 'Doe',
//     fullName() {
//         return 'Já jsem John';
//     }
// };

// const object2 = { ...object };

// function pozdrav () {
//     const { name: jmeno, surname: prijmeni } = object;
    
//     // const jmeno = object.name;
//     // const prijmeni = object.surname;
//     return `Dobrý den ${jmeno} ${prijmeni}.`;
// }

// console.log(pozdrav());

const boys = ['Karel', 'Michal', 'Josef'];
const grilz = ['Simona', 'Karolína', 'Michaela'];

const boysAndGrilz = [...boys, ...grilz];
// console.log(boysAndGrilz);

const boys2 = [...boys];  // Array.from([]); - kopie původního pole => původní pole není mutabilní metodou afektováno
const karel = boys2.shift();

console.log(boys);

