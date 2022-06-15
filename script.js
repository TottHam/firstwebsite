function compute()
{
    p = document.getElementById("principal").value;
    var degree = document.getElementById("degree").value;
    var wind = document.getElementById("wind").value;
    var rain = document.getElementById("rain").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML=
    "If you deposit " + "<mark>" + principal + "</mark>"+ ","+"</br>"+ 
    "at an interest rate of " + "<mark>" + rate + "%</mark>" +"."+"</br>"+ 
    "You will receive an amount of "+"<mark>" + interest +  "</mark>"+ ","+"</br>"+
    "in the year "+"<mark>" +year +"</mark>";
;

}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"km/h";
}


function checkdata()
{
    var principal = document.getElementById("principal");
    if(principal.value<=-100){ 
        alert("You are freezing to death, seek shelter") 
        principal.focus();
        return false;
    }
    if(principal.value==""){ 
        alert("Without temperatur, no recommendation") 
        principal.focus();
        return false;
    }

  
}
