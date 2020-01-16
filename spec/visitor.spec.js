const Visitor = require("../src/visitor.js");



describe("Calls alice", function() {

    beforeEach(function() {
        alice = jasmine.createSpy('alice');
        alice("alice_cooper", 71, "1948 Feb 4", "08:20am", "American rock star", "Wilfred");

    });

    it("tracks that alice was called", function() {
        expect(alice).toHaveBeenCalled();
    });
});

describe("Calls bob", function() {

    beforeEach(function() {
        bob = jasmine.createSpy('bob');
        bob("bob_marley", 36, "1945 Feb 6", "08:20am", "I am a raggae poineer!", "Wilfred");

    });

    it("tracks that bob was called", function() {
        expect(bob).toHaveBeenCalled();
    });
});

describe("Calls charlie", function() {

    beforeEach(function() {
        charlie = jasmine.createSpy('charlie');
        charlie("charlie_sheen", 55, "1965 Sept 3", "08:20am", "I am an American actor!", "Wilfred");

    });

    it("tracks that charlie was called", function() {
        expect(charlie).toHaveBeenCalled();
    });
});