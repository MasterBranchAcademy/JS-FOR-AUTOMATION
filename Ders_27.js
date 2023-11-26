class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
         console.log(this.firstName + ", " + this.lastName)
    }
    age = 25
    country = "Germany"
    id = true
}

let person = new Person("John", "Smith")
person.fullName()

