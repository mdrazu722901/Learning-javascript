var number = [3, 2, 5, 2, 6, 3, 10];
var uniqNumber = [3];

for (i = 0; i < number.length; i++) {
    var element = number[i];

    var to = uniqNumber.indexOf(element);

    if (to == -1) {
        uniqNumber.push(element);
    }
}
console.log(uniqNumber);