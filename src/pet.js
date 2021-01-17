const age = 0;
const hunger = 0;
const maxFitness = 10;


function Pet(name) {
    this.name = name;
    this.age = age;
    this.hunger = hunger;
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

module.exports = Pet;

