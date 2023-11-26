
module.exports = class Person {
    age = 25
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
         console.log(this.firstName + ", " + this.lastName)
    }

    get tamIsim(){
        return this.firstName + ", " + this.lastName
    }

    set updateFullName(value){
        const isimArray = value.split(" ")
        this.firstName = isimArray[0]
        this.lastName = isimArray[1]
    }
}
