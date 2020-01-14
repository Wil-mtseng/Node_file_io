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

        fs.writeFile(`visitor_${this.fullName}.json`, JSON.stringify(this, null, 4), (err) => {
            if (err) throw err;
            console.log('JSON file saved');
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

const visitor1 = new Visitor("wilfred_ratala", 33, "21 Nov", "11:20am", "Why mara vele?", "Nothi");

const visitor2 = new Visitor("wil_green", 33, "21/11/1985", "11:20pm", "Why mara vele yeh?", "Nothi");


visitor1.save();

visitor2.save();

load('Wilfred Ratala');

load('wil green');