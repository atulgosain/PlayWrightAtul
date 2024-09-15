//loops

// for(StatementRule1; statement2; statement3){

// }
//for loop
for(let i=0;i<5;i++){
    console.log('Hello Word!! ' +i)
}

var cars = ["Volvo", "Toyota", "Tesla","Honda","Huyndai"]
for (let car of cars){
    if(car == "Honda"){
        break
    }
    console.log(car)
}
//ES6 syntax for each loop
cars.forEach(car=>{
    console.log("Car Name: "+car)
}
)
