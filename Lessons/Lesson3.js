//Objects, are added to curly braces
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25,
    married: true,
    cars:["Honda","Tata","Hyundai"]

}
console.log(customer)
console.log(customer.firstName)

console.log(customer['lastName'])
console.log(customer.age)
console.log(customer.married)
//Dot Notations
customer.firstName ='Mike'
//Bracket Notations
customer['lastName']='Silver'

console.log(customer.firstName)
console.log(customer.lastName)

console.log(`${customer.firstName} ${customer.lastName}`)


//arrays are added in Square Brackets
var car = ["Volvo", "Toyta", "Tesla"]

console.log(car[0])
console.log(car[1])
car[1] = "BMW"

console.log(car[0])
console.log(car[1])
console.log(car[2])

console.log("Mike car is "+customer.cars[1])
