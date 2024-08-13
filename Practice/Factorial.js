// // let number = [30, 40, 50, 300, 500, 600];
// var number = 1;
// for(let i = 1; i <= 10; i++){
//    number = number * i;
//    console.log(i, number);
// }

// let i = 1;
// let facturials2 = 1;
// while(i <= 10){
//     facturials2 = facturials2 * i;
//     console.log(i, facturials2);
//     i++;
// };

function facturialsFunction(name){
    var number = 1;
      for(let i = 1; i <= name; i++){ //amra akhane i-taratib way ta facturials korlam
            number = number * i;
            // console.log(number, 'function');
      }
      return number;
}
var result = facturialsFunction(5);
console.log(result);