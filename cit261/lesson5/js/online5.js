export class Student {
    constructor(firstName, lastName, iNumber) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.iNumber = iNumber;
    }

    log() {
        console.log(this.firstName);
        console.log(this.lastName);
        cosole.log(this.iNumber);
    };
}