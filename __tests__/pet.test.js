const Pet = require("../src/pet");

describe("constructor", () => {
    test("returns an object", () => {
        expect(new Pet("Biscuit")).toBeInstanceOf(Object);
    });
});