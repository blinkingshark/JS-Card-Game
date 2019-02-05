var pack1 = [[1,1,5,5,5,5,5]];//PlayerNumebr,CardNotUsed,Strength,Energy, Dexterity, Accuracy, Defence
var pack2 = [[2,1,5,5,5,5,5]];//PlayerNumber,CardNotUsed,Stringth,Energy, Dexterity, Accuracy, Defence

var playerOneScore = 0;
var playerTwoScore = 0;


var GenerateRandomNumber = function(){
    return Math.floor(Math.random()*10);
}
var PushToArray = function(currentArray){
    var arrayNumber = currentArray[0][0];
    currentArray.push([arrayNumber,1,GenerateRandomNumber(),GenerateRandomNumber(),GenerateRandomNumber(),GenerateRandomNumber(),GenerateRandomNumber()]);
    
}

PushToArray(pack1);
PushToArray(pack1);
PushToArray(pack1);
PushToArray(pack1);

PushToArray(pack2);
PushToArray(pack2);
PushToArray(pack2);
PushToArray(pack2);

//console.log(pack1);
//console.log(pack2);

var Combat = function(object1, object2){
    console.log(object1);
    console.log(object2);
    
    object1[1]=0;
    object2[1]=0;
    
    var winStrength =-2;
    var winEnergy =-2;
    var winDexterty =-1;
    var winAccuracy =-1;
    var winDefece =-1;

    var strength = object1[2]-object2[2];
    var energy = object1[3]-object2[3];
    var dexterity = object1[4]-object2[4];
    var accuracy = object1[5]-object2[5];
    var defece = object1[6]-object2[6];
    

    

    if (strength>0){
    winStrength = 2;
    }
    if (energy){
        winEnergy = 2;
    }
    if (dexterity){
       winDexterty =1;
    }
    if (accuracy){
        winAccuracy = 1;
    }
    if (defece){
        winDefece = 1;
    }


    console.log(winStrength);
    console.log(winEnergy);
    console.log(winDexterty);
    console.log(winAccuracy);
    console.log(winDefece);

   

    console.log("Total" + (winStrength+winEnergy+winDexterty+winAccuracy+winDefece));

    console.log("--------------");
    
    if ( (winStrength + winEnergy + winDexterty + winAccuracy+winDefece) > 0 ){
        console.log("First Arg Wins !");
        if(object1[0] == 1){
            playerOneScore ++;            
        }
        else{
            playerTwoScore ++;
        }
        return object1;
        
        //It will be great if I can add eventHandlers
    }
    else {

        console.log("Second Arg Wins !");
        if(object2[0] == 1){
            playerOneScore ++;            
        }
        else{
            playerTwoScore ++;
        }

        return object2;
        //It will be great if I can add eventHandlers
    }

}

console.log(Combat(pack1[3], pack2[4]));



console.log("Player One Score : " + playerOneScore);
console.log("Player Two Score : " + playerTwoScore);

//Because of loading delay
window.onload = function (){
    document.getElementById("combat").addEventListener("click", test);
}


var test = function(){
    console.log("Testing Message from test function");
}


