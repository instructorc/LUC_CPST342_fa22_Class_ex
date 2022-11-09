let food = ["Nuts", "Fish", "Lentils", "Whole Grains", "Beans", "Olive Oil", 23, "Eggs", "Yogurt"];

//Call the outputItems function
//outputItems(food);

console.log(findLentils(food));

//Defining a function
function outputItems(food){

    //Looping structure
    for(let x = 0; x < food.length; x++){
        console.log(food[x]);
    }
}

function findLentils(food){
    //Looping structure
    for(let x = 0; x < food.length; x++){
        if( food[x] == "Lentils"){
            return food[x];
        }
    }
}