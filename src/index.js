console.log('Welcome to Exprezs js');

function array(arr){
    arr.pop();
    return arr;
}

var ourarray=[1,2,3,4,5,6];
console.log(array(ourarray));

var number='50';
function greaterorlesser(number){
    if(number<50){
        console.log("Number is Less than 25");
    }
    else if(number>50){
        console.log("Number is Greater than 25.")
    }
    else if(number===50){
        console.log("Number is Equal to 25.");
    }
    else{
        console.log("Number data type doesn't match with comparison value data type.");
    }
}

greaterorlesser(number);