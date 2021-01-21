const {
    Pet,
    birth_age,
    birth_hunger,
    birth_fitness,
    birth_happiness,
    age_increment,
    hunger_increment,
    fitness_decrement,
    happiness_decrement,
    fitness_increment,
    hunger_decrement,
    happiness_increment,
    feeling_hungry,
    feeling_weak,
    feeling_lonely,
    minimum_hunger,
    maximum_fitness,
    maximum_happiness,
    age_limit,
    hunger_limit,
    fitness_limit,
    happiness_limit,
    RIP1,
    RIP2
} = require("../src/pet");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Biscuit")).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
        const pet = new Pet("Biscuit");

        expect(pet.name).toEqual("Biscuit");
    });

    it("has an initial age of birth_age", () => {
        const pet = new Pet("Biscuit");

        expect(pet.age).toEqual(birth_age);
    });

    it("has an initial hunger of birth_hunger", () => {
        const pet = new Pet("Biscuit");

        expect(pet.hunger).toEqual(birth_hunger);
    });

    it("has an initial fitness of 10", () => {
        const pet = new Pet("Biscuit");

        expect(pet.fitness).toEqual(birth_fitness);
    });

    it("has initial happiness of birth_happiness", () =>  {
        const pet = new Pet("Biscuit");

        expect(pet.happiness).toEqual(birth_happiness);
    });

    it("has no initial children", () => {
        const pet = new Pet("Biscuit");

        expect(pet.children).toHaveLength(0);
    });
});


describe("growUp", () => {
    it("increases age by age_increment", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.age).toEqual(age_increment);
    });

    it("increases hunger by hunger_increment", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.hunger).toEqual(hunger_increment);
    });

    it("decreases fitness by fitness_decrement", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.fitness).toEqual(birth_fitness - fitness_decrement);
    });

    it("decreases happiness by happiness_decrement", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.happiness).toEqual(birth_happiness - happiness_decrement);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.age = age_limit;

        expect(() => pet.growUp()).toThrow(`${RIP1} ${pet.name}. ${RIP2}`);
    });
});


describe("walk", () => {
    it("increases fitness by fitness_increment", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 4
        pet.walk();

        expect(pet.fitness).toEqual(4 + fitness_increment);
    });

    it("increases fitness to maximum_fitness", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = maximum_fitness - 2;
        pet.walk();

        expect(pet.fitness).toEqual(maximum_fitness);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = fitness_limit;

        expect(() => pet.walk()).toThrow(`${RIP1} ${pet.name}. ${RIP2}`);
    });
});


describe("feed", () => {
    it("decreases hunger by hunger_decrement", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = 9;
        pet.feed();

        expect(pet.hunger).toEqual(9 - hunger_decrement);
    });

    it("decreases hunger to minimum_hunger", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = minimum_hunger + 2;
        pet.feed();

        expect(pet.hunger).toEqual(minimum_hunger);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = hunger_limit;

        expect(() => pet.feed()).toThrow(`${RIP1} ${pet.name}. ${RIP2}`);
    });
});


describe("play", () => {
    it("increases happiness by happiness_increment", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = 5;
        pet.play();

        expect(pet.happiness).toEqual(5 + happiness_increment);
    });

    it("increases happiness to maximum-happiness", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = maximum_happiness - 1;
        pet.play();

        expect(pet.happiness).toEqual(maximum_happiness);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = happiness_limit;

        expect(() => pet.play()).toThrow(`${RIP1} ${pet.name}. ${RIP2}`);
    });
});


describe("checkUp", () => {
    it("if fitness <= feeling_weak, returns I need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = feeling_weak;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I need a walk");
    });

    it("if hunger >= feeling_hungry, return I am hungry", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = feeling_hungry;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I am hungry");
    });

    it("if happiness <= feeling_lonely, returns I feel lonely", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = feeling_lonely;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel lonely :(");
    });

    it("if fitness <= feeling_weak and hunger >= feeling_hungry, returns I am hungry and I need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = feeling_weak - 1;
        pet.hunger = feeling_hungry + 2;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I am hungry and I need a walk");
    });

    it("if hunger >= feeling_hungry and happiness <= feeling_lonely, returns I feel hungry and lonely", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = feeling_hungry + 1;
        pet.happiness = feeling_lonely - 3;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel hungry and lonely");
    });

    it("if happiness <= feeling_lonely and fitness <= feeling_weak, returns I feel lonely and need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = feeling_weak - 1;
        pet.happiness = feeling_lonely - 2;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel lonely and need a walk");
    });

    it("if all of the above are true, return I feel lonely, hungry and I need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = feeling_weak;
        pet.hunger = feeling_hungry;
        pet.happiness = feeling_lonely;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel lonely, hungry, and I need a walk");
    });

    it("if none of the above are true, return I feel great", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = feeling_weak + 1;
        pet.hunger = feeling_hungry - 2;
        pet.happiness = feeling_lonely + 4;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel great!");
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = fitness_limit;

        expect(pet.checkUp()).toEqual(`${RIP1} ${pet.name}. ${RIP2}`);
    });
});


describe("isAlive", () => {
    it("returns false if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.age = age_limit + 1;
        
        expect(pet.isAlive).toEqual(false);
    });

    it("returns ture if pet is alive", () => {
        const pet = new Pet("Biscuit");

        pet.age = age_limit - 2;
        
        expect(pet.isAlive).toEqual(true);
    });
});


describe("adoptChild", () => {
    it("adds a child to the array of children", () => {
        const pet = new Pet("Biscuit");

        pet.adoptChild("Teacup");

        expect(pet.children).toHaveLength(1);
    });

    it("checks contents of new child ", () => {
        const pet = new Pet("Biscuit");

        pet.adoptChild("Teacup");

        expect(pet.children).toEqual([{
            name: 'Teacup',
            age: 0,
            hunger: 0,
            fitness: 10,
            happiness: 10,
            children: []
        }]);
    });
});
