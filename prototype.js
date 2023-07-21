class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age);
        this.type = type; 
        this.country = country;
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}

let sakib = new Cricketer('Sakib', 35, 'All-rounder', 'Bangladesh');
console.log(sakib.name);