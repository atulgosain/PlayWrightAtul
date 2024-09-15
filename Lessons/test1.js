let familySize = 3;
let plannedDistanceToDrive = 210;

function recommendedCar(familySize, plannedDistanceToDrive) {

if(familySize <=4){
    if (plannedDistanceToDrive < 200){
        return "Tesla"
    } else {
        return "Toyta Camry"
            }
}
else 
{
    return "Minivan"
}

}


console.log(recommendedCar(familySize, plannedDistanceToDrive));