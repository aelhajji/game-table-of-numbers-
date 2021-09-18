var x =  document.getElementById('x');
var x_min_one =  document.getElementById('x-one');
var x_plus_two = document.getElementById("x-plus-two");
var x_plus_one = document.getElementById('x-plus-one');
var inputvalue = document.getElementById('inputvalue');
function calcule(){
    if(inputvalue.value >= 21 && inputvalue.value <= 99){
        let tret = inputvalue.value - 20;
        x.innerHTML= tret
        x_min_one.innerHTML = tret -1
        x_plus_two.innerHTML = tret + 2
        x_plus_one.innerHTML = tret + 1
    }
    else{
        alert("Entrez un nombre entre 21 et 99")
    }
    
}