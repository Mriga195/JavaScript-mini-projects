const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 25,
    isEmployed: true,
    sayHello: () => {
        console.log(`Hii, I am ${this.firstName}`);
    }
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 23,
    isEmployed: false,
}

console.log(person1);
console.log(person2);
console.log(person1.sayHello());