
function kilometerToMeter(distance){
    if(typeof distance === 'string'){          //(for Bonus) check the parameter input string or not
        console.log('String is not accepted');
    }
    else if(distance < 0){                     //(for Bonus) checking.is the distance negative or not
        console.log('distance can not be negative');
    }
    else{
    var meter = distance * 1000;             //1KM = 1000m
    return meter;
    }
}


function budgetCalculator(watch,phone,laptop){
    if(typeof watch === 'string' || typeof phone === 'string' || typeof laptop === 'string'){          //(for Bonus) check the parameter input string or not
        console.log('String is not accepted');
    }
    if(watch < 0 || phone < 0 || laptop < 0){    //(for Bonus) checking.is the quantity watch,laptop and phone negative or not
        console.log('negative quantity is not accepted');
    }
    else{
    var budget1 = watch * 50;
    var budget2 = phone * 100;
    var budget3 = laptop * 500;
    var totalBudget = budget1 + budget2 + budget3;
    return totalBudget;
    }
}


function hotelCost(day){
    if(typeof day === 'string' || day < 0){          //(for Bonus) check the parameter input string or not (OR) negative or not
        console.log('Please enter a positive integer value');
    }

    else{
    var totalCost = 0;
    if(day <= 10){
        totalCost = day * 100;
    }
    else if(day > 10 && day <= 20){           //day greater than 10 and less than equal to 20
        var initialCost = 10 * 100;           //first 10 day's cost 100
        var extraDay = day - 10;              //remaining days
        var extraCost = extraDay * 80;        //after 10 days cost is 80
        totalCost = initialCost + extraCost;
    }
    else{
        var initialCost = (10*100) + (10*80); //first 10 day and next 10 day's cost
        var extraDay = day - 20;              //remaining days
        var extraCost = extraDay * 50;        //after 20 days cost is 80
        totalCost = initialCost + extraCost;
    }
    return totalCost;
}
    
}


function megaFriend(name){
    if(name.length == 0){   //(for Bonus) is array empty or not 
        console.log('array does not exist');
    }
    else{
    var temp = name[0];
    var max = temp.length;                        //length of first string
    for(var i=1;i<name.length;i++){
        var temp2 = name[i]
        var temp2Length = temp2.length;
        if(temp2Length > max){
            max = temp2Length;                    //max value updated
            var temp2Index = name.indexOf(temp2); //last enter string index
        }
        
    }
}
    return name[temp2Index];                      //return index of max string
}
/*
var name = ['hridoy','rabi','imran','mohiuddin','aaaaaaaaa'];
//var name = [];
var megaName = megaFriend(name);
console.log(megaName);

var day = 21;
console.log(hotelCost(day));

console.log(budgetCalculator(2,2,3));
//console.log(budgetCalculator(2,2,'abc'));

console.log(kilometerToMeter(2));
*/
