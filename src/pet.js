const age = 0;
const minHunger = 0;
const maxHunger = 5;
const maxFitness = 10;
const minFitness = 3;
const deathNote = "Your pet is no longer alive :(";

function Pet(name) {
    this.name = name;
    this.age = age;
    this.hunger = minHunger;
    this.fitness = maxFitness;
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error (deathNote);
    };
    this.age ++;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error (deathNote);
    } else if((this.fitness + 4) <= maxFitness) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    };
};

Pet.prototype.feed = function () {
    if(!this.isAlive) {
        throw new Error (deathNote);
    } else if((this.hunger - 3) >= minHunger) {
        this.hunger -= 3;
    } else {
        this.hunger = 0;
    };
};

Pet.prototype.checkUp = function() {
    if(!this.isAlive) {
        throw new Error (deathNote);
    };
    if((this.fitness <= minFitness) && (this.hunger >= maxHunger)) {
        return "I am hungry AND I need a walk";
    };
    if(this.fitness <= minFitness) {
        return "I need a walk";
    };
    if(this.hunger >= maxHunger) {
        return "I am hungry";
    } else {
        return "I feel great!";
    };   
};

module.exports = Pet;

