const Pet = require("../src/pet");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Biscuit")).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
        const pet = new Pet("Biscuit");

        expect(pet.name).toEqual("Biscuit");
    });

    it("has an initial age of 0", () => {
        const pet = new Pet("Biscuit");

        expect(pet.age).toEqual(0);
    });

    it("has an initial hunger of 0", () => {
        const pet = new Pet("Biscuit");

        expect(pet.hunger).toEqual(0);
    });

    it("has an initial fitness of 10", () => {
        const pet = new Pet("Biscuit");

        expect(pet.fitness).toEqual(10);
    });

    it("has initial happiness of 10", () =>  {
        const pet = new Pet("Biscuit");

        expect(pet.happiness).toEqual(10);
    });
});


describe("growUp", () => {
    it("increments age by 1", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it("increases hunger by 5", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it("decreases fitness by 3", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    it("decreases happiness by 5", () => {
        const pet = new Pet("Biscuit");

        pet.growUp();

        expect(pet.happiness).toEqual(5);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.age = 30;

        expect(() => pet.growUp()).toThrow("R.I.P Biscuit. A pet is for life, not just for Christmas");
    });
});


describe("walk", () => {
    it("increases fitness by 4", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 4
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });

    it("increases fitness to a maximum of 10", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    xit("increases happiness by 1", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = 3;
        pet.walk();

        expect(pet.happiness).toEqual(4);
    });

    xit("increases happiness to a maximum of 10", () =>{
        const pet = new Pet("Biscuit");

        pet.happiness = 10;
        pet.walk();

        expect(pet.happiness).toEqual(10);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 0;

        expect(() => pet.walk()).toThrow("R.I.P Biscuit. A pet is for life, not just for Christmas");
    });
});


describe("feed", () => {
    it("decreases hunger by 3", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = 9;
        pet.feed();

        expect(pet.hunger).toEqual(6);
    });

    it("decreases hunger to a minimum of 0", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = 10;

        expect(() => pet.feed()).toThrow("R.I.P Biscuit. A pet is for life, not just for Christmas");
    });
});


describe("play", () => {
    it("increases happiness by 3", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = 5;
        pet.play();

        expect(pet.happiness).toEqual(8);
    });

    it("increases happiness to a maximum of 10", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = 9;
        pet.play();

        expect(pet.happiness).toEqual(10);
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = 0;

        expect(() => pet.play()).toThrow("R.I.P Biscuit. A pet is for life, not just for Christmas");
    });
});


describe("checkUp", () => {
    it("if fitness is 3 or less, returns I need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 3;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I need a walk");
    });

    it("if hunger is 5 or more, return I am hungry", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = 7;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I am hungry");
    });

    it("if happiness is 5 or less, returns I feel lonely", () => {
        const pet = new Pet("Biscuit");

        pet.happiness = 5;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel lonely :(");
    });

    it("if hunger is high and fitness is low, returns I am hungry and I need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 1;
        pet.hunger = 5;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I am hungry and I need a walk");
    });

    it("if hunger is high and happiness is low, returns I feel hungry and lonely", () => {
        const pet = new Pet("Biscuit");

        pet.hunger = 5;
        pet.happiness = 2;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel hungry and lonely");
    });

    it("if happiness and fitness are low, returns I feel lonely and need a walk", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 1;
        pet.happiness = 3;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel lonely and need a walk");
    });

    it("if all of the above are true, return I am hungry, I need a walk and I feel lonely", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 1;
        pet.hunger = 5;
        pet.happiness = 4;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel lonely, hungry, and I need a walk");
    });

    it("if neither of the above are true, return I feel great", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 4;
        pet.hunger = 3;
        pet.happiness = 7;
        pet.checkUp();

        expect(pet.checkUp()).toEqual("I feel great!");
    });

    it("throws an error if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.fitness = 0;

        expect(pet.checkUp()).toEqual("R.I.P Biscuit. A pet is for life, not just for Christmas");
    });
});


describe("isAlive", () => {
    it("returns false if pet is no longer alive", () => {
        const pet = new Pet("Biscuit");

        pet.age = 31;
        
        expect(pet.isAlive).toEqual(false);
    });

    it("returns ture if pet is alive", () => {
        const pet = new Pet("Biscuit");

        pet.age = 28;
        
        expect(pet.isAlive).toEqual(true);
    });
});
