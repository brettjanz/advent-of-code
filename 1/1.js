// input array from command line, split at commas
var inputArray = process.argv[2].split(" ");
// convert to array of numbers
var data = [];
inputArray.forEach(function (char) { return data.push(parseInt(char)); });
function calculateFuel(mass) {
    return Math.floor(mass / 3) - 2;
}
function part1(data) {
    var modules = data.slice();
    var total = 0;
    for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
        var mass = modules_1[_i];
        total += calculateFuel(mass);
    }
    return total;
}
function recursiveFuel(mass) {
    var fuel = calculateFuel(mass);
    if (fuel > 0) {
        fuel += recursiveFuel(fuel);
    }
    else {
        return 0;
    }
    return fuel;
}
function part2(data) {
    var modules = data.slice();
    var total = 0;
    for (var _i = 0, modules_2 = modules; _i < modules_2.length; _i++) {
        var mass = modules_2[_i];
        total += recursiveFuel(mass);
    }
    return total;
}
console.log("Part 1: " + part1(data));
console.log("Part 2: " + part2(data));
