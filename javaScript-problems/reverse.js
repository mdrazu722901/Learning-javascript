function reverseString(str){
    var reverse ="";
    for(var i = 0; i < str.length; i++){
     var char = str[i];
     reverse = char + reverse;
    }
    return reverse;
}
var speech = "how are you, eliens?";
var convert = reverseString(speech);
console.log(convert);