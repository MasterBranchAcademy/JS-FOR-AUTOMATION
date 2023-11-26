let person = {
    firstName: "John",
    lastName: "smith",
    age: 30,
    gender:"male"
}

for (let key in person) {
    let value = person[key]
    console.log(value)
}
