// Birth values
const birth_age = 0;
const birth_hunger = 0;
const birth_fitness = 10;
const birth_happiness = 10;

// Growing up
const age_increment = 1;
const hunger_increment = 5;
const fitness_decrement = 3;
const happiness_decrement = 5;

// Walking
const fitness_increment = 4;
const walking_happiness_increment = 1;

// Feeding
const hunger_decrement = 3;

// Playing
const happiness_increment = 3;

// Hunger & Fitness warnings
const feeling_hungry = 5;
const feeling_weak = 3;
const feeling_lonely = 5;

// Min / Max values
const minimum_hunger = 0;
const maximum_fitness = 10;
const maximum_happiness = 10;

// Death values
const age_limit = 30;
const hunger_limit = 10;
const fitness_limit = 0;
const happiness_limit = 0;

// Death message
const RIP1 = "R.I.P" // Followed by pet's name
const RIP2 = "A pet is for life, not just for Christmas"


function Pet(name) {
    this.name = name;
    this.age = birth_age;
    this.hunger = birth_hunger;
    this.fitness = birth_fitness;
    this.happiness = birth_happiness;
};

Pet.prototype = {
    get isAlive() {
        return this.age < age_limit && this.hunger < hunger_limit && this.fitness > fitness_limit && this.happiness > happiness_limit;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    };
    this.age += age_increment;
    this.hunger += hunger_increment;
    this.fitness -= fitness_decrement;
    this.happiness -= happiness_decrement;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    } else if((this.fitness + fitness_increment) <= maximum_fitness) {
        this.fitness += fitness_increment;
    } else {
        this.fitness = maximum_fitness;
    };
};

Pet.prototype.feed = function () {
    if(!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    } else if((this.hunger - hunger_decrement) >= minimum_hunger) {
        this.hunger -= hunger_decrement;
    } else {
        this.hunger = minimum_hunger;
    };
};

Pet.prototype.play = function () {
    if (!this.isAlive) {
        throw new Error (`${RIP1} ${this.name}. ${RIP2}`);
    } else if ((this.happiness + happiness_decrement) <= maximum_happiness) {
        this.happiness += happiness_increment;
    } else {
        this.happiness = maximum_happiness;
    };
};

Pet.prototype.checkUp = function() {
    if(!this.isAlive) { return (`${RIP1} ${this.name}. ${RIP2}`);
    };
    if((this.fitness <= feeling_weak) && (this.hunger >= feeling_hungry) && (this.happiness <= feeling_lonely)) {
        return "I feel lonely, hungry, and I need a walk";
    };
    if((this.fitness <= feeling_weak) && (this.hunger >= feeling_hungry)) {
        return "I am hungry and I need a walk";
    };
    if((this.fitness <= feeling_weak) && (this.hunger >= feeling_hungry)) {
        return "I am hungry and I need a walk";
    };
    if((this.hunger >= feeling_hungry) && (this.happiness <= feeling_lonely)) {
        return "I feel hungry and lonely";
    };
    if((this.happiness <= feeling_lonely) && (this.fitness <= feeling_weak)) {
        return "I feel lonely and need a walk";
    };
    if(this.fitness <= feeling_weak) {
        return "I need a walk";
    };
    if(this.hunger >= feeling_hungry) {
        return "I am hungry";
    };
    if(this.happiness <= feeling_lonely) {
        return "I feel lonely :(";
    } else {
        return "I feel great!";
    };   
};

module.exports = Pet;

