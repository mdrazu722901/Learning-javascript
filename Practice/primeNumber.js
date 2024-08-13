// let num = 7;
// for (i = 2; i <= num - 1; i++) {
//     if (num % i == 0) {
//         console.log("is not a prime number");
//         break;
//     }
//     console.log("this is a prime number")
//     break;
// }


function isPrimeNumber(num) {
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            return "is not a prime number";
            
        }
        return "this is a prime number";
    }

}
var result = isPrimeNumber(50);
console.log(result);