//counter code 
var button = document.getElementById('counter');
var counter =0;
button.click = function() {
    //make a requestb tonthe cpounter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
    
    counter = counter + 1;
    var span =document.getelmentbyid('count');
    span.innerHTML =counter.toString();
};