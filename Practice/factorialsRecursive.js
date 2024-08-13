// kono akta function a bitor thake jodi oi function ta ke call kora hoy, take Recursive way bole
//factorials buji===========================
// 0! = 1 
// 1! = 1;
// 2! = 1*2
// 3! = 1*2*3;
// 4! = 1*2*3*4;
// 5! = 1*2*3*4*5 abar ai babe o hoy 5! = 4!*5 abar 5! = (5-1)*5; === bujar try koro............
// abar// n! = (n-1)*n ====== hoy kintu dekho================

function factorials(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorials(n-1);
    }
}

let result = factorials(10);
console.log(result);
