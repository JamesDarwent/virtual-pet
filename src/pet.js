const age = 0;
const minHunger = 0;
const maxFitness = 10;


function Pet(name) {
    this.name = name;
    this.age = age;
    this.hunger = minHunger;
    this.fitness = maxFitness;
};

Pet.prototype.growUp = function() {
    this.age ++;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if((this.fitness + 4) <= maxFitness) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    };
};

Pet.prototype.feed = function () {
    if((this.hunger - 3) >= minHunger) {
        this.hunger -= 3;
    } else {
        this.hunger = 0;
    };
};

module.exports = Pet;

