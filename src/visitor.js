const fs = require('fs')

class Visitor {

    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfPersonAssisting) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfPersonAssisting = nameOfPersonAssisting;
    }

    // Save function
    save() {

        // Create file in json format
        fs.writeFile(`visitor_${this.fullName}.json`, JSON.stringify(this, null, 4), (err) => {
            if (err) throw err;
            console.log('JSON file saved :)');
        });
    }



};

// Load function
function load(fullName) {

    // replaces spaces with underscores
    let name = fullName.replace(' ', '_');

    fs.readFile('visitor_' + name + '.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

}



const alice = new Visitor("alice_cooper", 71, "1948 Feb 4", "08:20am", "American rock star", "Wilfred");
const bob = new Visitor("bob_marley", 36, "1945 Feb 6", "08:20am", "I am a raggae poineer!", "Wilfred");
const charlie = new Visitor("charlie_sheen", 55, "1965 Sept 3", "08:20am", "I am an American actor!", "Wilfred");


alice.save();
bob.save();
charlie.save();

load('alice cooper');
load('bob marley');
load('charlie sheen');

module.exports = {
    Visitor
};