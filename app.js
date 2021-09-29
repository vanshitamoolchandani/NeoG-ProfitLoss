var initialValue = document.querySelector("#ini-val");
var currentValue = document.querySelector("#cur-val");
var noofStock = document.querySelector("#num-sto");
var cal = document.querySelector("#cal-button");
var output = document.querySelector("#output");

cal.addEventListener("click", calPL)

function calPL(){
    var res,resper;
    var number = Number(noofStock.value);
    
    var inSt = inStock(Number(initialValue.value), Number(noofStock.value));
    var cuSt = currStock(Number(currentValue.value), Number(noofStock.value));
    
    if(inSt<0 || cuSt<0 || number<0){
        output.innerText = "Invalid Input";

    }
    else{
    
    if(inSt>cuSt){
        var loss = (inSt-cuSt);
        var res=loss*number;
        var resper = (res/(inSt*number))*100;
        output.innerText = "Loss is " +loss+ " Loss Percentage is "+resper;
    }
    else if(inSt<cuSt){
        var profit=cuSt-inSt;
        var res=profit*number;
        var resper = (res/(inSt*number))*100;
        output.innerText = "Profit is " +profit+ " Profit Percentage is "+resper;


    }
    else{
        output.innerText = "Nothing";
    }


    }
}

function inStock(i,s){
    var inSt = i*s;
    return inSt;
}
function currStock(c,s){
    var currSt = c*s;
    return currSt;
}