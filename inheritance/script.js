class Animal {
    alive = true;

    eat()
    {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabit extends Animal {
    name = 'Rabit';
}

class Fish extends Animal {
    name = 'Fish';
}

class Hawk extends Animal {
    name = "Hawk";
}

const rabbit = new Rabit();
rabbit.alive = false;
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();