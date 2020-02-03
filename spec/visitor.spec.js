const { Visitor } = require("../src/visitor.js");


const fs = require("fs");
const bob = new Visitor("bob_marley", 36, "1945 Feb 6", "08:20am", "I am a raggae poineer!", "Wilfred");

bob.save();

describe("function", () => {

    it("tests if save() is defined", () => {
        expect(bob).toBeDefined();
    });

    it("test if details of instance correlate with the constructor", () => {

        fs.readFile('visitor_bob_marley.json', 'utf8', (err, data) => {
            if (err) { throw err }

            let dataContent = JSON.parse(data);

            expect(dataContent.fullName).toBe("bob_marley");
            expect(dataContent.age).toBe(36);
            expect(dataContent.dateOfVisit).toBe("1945 Feb 6");
            expect(dataContent.timeOfVisit).toBe("08:20am");
            expect(dataContent.comments).toBe("I am a raggae poineer!");
            expect(dataContent.nameOfPersonAssisting).toBe("Wilfred");
        });


    });
});

