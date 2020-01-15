const Visitor = require("../src/visitor");
let visitor1 = new Visitor("wilfred_ratala", 33, "21 Nov", "11:20am", "Why mara vele?", "Nothi");

describe("Matches class with instance", () => {

    it("match any value", () => {
        expect(visitor1).toEqual(jasmine.any(Visitor))
    });
});

describe("", function() {

    beforeEach(function() {
        visitor1 = jasmine.createSpy('visitor1');

        visitor1("wilfred_ratala", 33, "21 Nov", "11:20am", "Why mara vele?", "Nothi");
    });

    it("tracks that the spy was called", function() {
        expect(visitor1).toHaveBeenCalled();
    });
})