//Function
//functins are used to organize the code in reuse components

//Declartive function, it can be invoked anytime, even before the function declared

function helloOne()
{
    console.log("Hello one!! :)")
}
helloOne()

//Anoymus function
var helloTwo= function(){
    console.log("Hello Two!! :)")
}

helloTwo()
//ES6 function syntax or arrow function
var helloThree = () =>{
    console.log("Hello Three !!")

}
helloThree()


//Function with arguments

function printName(Name, lastName){
    console.log(Name +' '+ lastName)
}
var nme = "Atul"
printName(nme, 'Gosain')

//Function with a return

function multiplyByTwo(number){
    var result = number *2
    return result
}

import{printAge} from '../helperFolder/printHelper.js'
printAge(25)


var myResult = multiplyByTwo(7)

console.log(myResult)

//import evertthing
import * as helper from "../helperFolder/printHelper.js"

helper.printAge(20)
helper.multiplyByTwos
helper.printNames