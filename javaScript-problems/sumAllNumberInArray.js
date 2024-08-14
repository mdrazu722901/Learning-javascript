var result = [20, 30, 40, 60, 80, 100, 120, 150, 160];
var totalResult = 0;
for (i = 0; i < result.length; i++) {
    // totalResult = totalResult + result[i];
    var element = result[i];
    totalResult = totalResult + element;

}
console.log(totalResult);




function sum(num) {
    var totalResult = 0;
    for (i = 0; i < num.length; i++) {
        var element = result[i];
        totalResult = totalResult + element;

    }
    return totalResult;
}
var Run = [20, 30, 50, 60, 40, 20];
var total = sum(Run);
console.log(total);