//FUNCTIONS

//task 1
function selamlama() {
    //console.log("Hello world!")
}



selamlama()



//task 2

function infoOfJohn() {
    let name = "John"
    let surname = "smith"
    let age = 24
    let country = "Germany"
    //console.log("name: " + name + " surname: " + surname + " age: " + age + " country: " + country)
}

infoOfJohn()



//task 3

function ageCalculator(currentYear, dateOfBirth) {
    let age = currentYear - dateOfBirth
    //console.log(age)
}


let currentYear = 2023
let dateOfBirth = 1990

ageCalculator(currentYear, dateOfBirth)




//task 4
let mevcutYil = 2018
let dogumTarihi = 2000

function ageCalculator(mevcutYil, dogumTarihi) {
    let yas = mevcutYil - dogumTarihi
    return yas
}

let yas = ageCalculator(mevcutYil, dogumTarihi)

if (yas >= 18) {
    //console.log("Ehliyet alabilir")
} else {
    //console.log("Ehliyet alamaz")
}


//task 5

function add(x, y) {
    return x + y
}

var toplam_1 = add(1, 2)
//console.log(toplam_1)

let toplam_2 = add(3,4)
//console.log(toplam_2)

const toplam_3 = add(30,40)
//console.log(toplam_3)








//task 6

let sum = function(x,y){
    return x+y
}

//console.log(sum(2,3))



//task 7
let toplam = (x,y) => x+y
//console.log(toplam(10,12))















