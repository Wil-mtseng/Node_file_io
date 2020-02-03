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
module.exports = {
    Visitor}

};
 
