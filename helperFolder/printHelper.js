export function printAge(age){

    console.log(age)
}


//Function with arguments
export function printNames(Name, lastName){
    console.log(Name +' '+ lastName)
}

//Function with a return
export function multiplyByTwos(number){
    var result = number *2
    return result
}

 class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }

    /**
 * This method will print last name
 * 
 * @param {string} lastname
 * 
 * 
 */
//we can also add annotation is the code, , with type of data expect

    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()
//we have removed the export from the class and added it to instance of class