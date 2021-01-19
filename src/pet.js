// Birth values
const birth_age = 0;
const birth_hunger = 0;
const birth_fitness = 10;

// Growing up
const age_increment = 1;
const hunger_increment = 5;
const fitness_decrement = 3;

// Walking
const fitness_increment = 4;

// Feeding
const hunger_decrement = 3;

// Hunger & Fitness warnings
const getting_hungry = 5;
const getting_weak = 3;

// Death values
const age_limit = 30;
const hunger_limit = 10;
const fitness_limit = 0;

// Death message
const RIP1 = "R.I.P" // Followed by pet's name
const RIP2 = "A pet is for life, not just for Christmas"


function Pet(name) {
    this.name = name;
    this.age = birth_age;
    this.hunger = birth_hunger;
    this.fitness = birth_fitness;
};

Pet.prototype = {
    get isAlive() {
        return this.age < age_limit && this.hunger < hunger_limit && this.fitness > fitness_limit;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    };
    this.age += age_increment;
    this.hunger += hunger_increment;
    this.fitness -= fitness_decrement;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    } else if((this.fitness + fitness_increment) <= birth_fitness) {
        this.fitness += fitness_increment;
    } else {
        this.fitness = birth_fitness;
    };
};

Pet.prototype.feed = function () {
    if(!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    } else if((this.hunger - hunger_decrement) >= birth_hunger) {
        this.hunger -= hunger_decrement;
    } else {
        this.hunger = birth_hunger;
    };
};

Pet.prototype.checkUp = function() {
    if(!this.isAlive) { return (`${RIP1} ${this.name}. ${RIP2}`);
    };
    if((this.fitness <= getting_weak) && (this.hunger >= getting_hungry)) {
        return "I am hungry AND I need a walk";
    };
    if(this.fitness <= getting_weak) {
        return "I need a walk";
    };
    if(this.hunger >= getting_hungry) {
        return "I am hungry";
    } else {
        return "I feel great!";
    };   
};

module.exports = Pet;

