// object literal
const player = { name: 'Shakib Al Hasan', age: 31, job: 'Cricketer' }

// object constructor

const person = new Object();

// object inheritence
const human = Object.create(null);
const student = Object.create(player);
console.log(student.name);

// object in class

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peo = new People('bappy', 28);
console.log(peo);

// syntactical object(using function)
function Manus(name) {
    this.name = name;
}
const man = new Manus('Bappy');
console.log(man);