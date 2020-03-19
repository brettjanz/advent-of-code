// input array from command line, split at commas
var inputArray = process.argv[2].split(",");
// convert to array of numbers
var data = [];
inputArray.forEach(function (char) { return data.push(parseInt(char)); });
function runProgram(program) {
    // loop through each opcode of program
    for (var i = 0; i < program.length; i += 4) {
        // check for end of program
        var opcode = program[i];
        if (opcode == 99) {
            break;
        }
        // get indexes
        var inputIndex1 = program[i + 1];
        var inputIndex2 = program[i + 2];
        var outputIndex = program[i + 3];
        //get inputs
        var input1 = program[inputIndex1];
        var input2 = program[inputIndex2];
        // calculate based on opcode and assign to output
        switch (opcode) {
            case 1: {
                program[outputIndex] = input1 + input2;
                break;
            }
            case 2: {
                program[outputIndex] = input1 * input2;
                break;
            }
        }
    }
    return program[0];
}
function part1(data) {
    // copy data
    var program = data.slice();
    // set values according to instructions
    program[1] = 12;
    program[2] = 2;
    // run
    return runProgram(program);
}
function part2(data) {
    // loop through every combination of noun/verb
    for (var noun = 0; noun < 100; noun++) {
        for (var verb = 0; verb < 100; verb++) {
            // set memory to data
            var program = data.slice();
            // assign index 1 and 2
            program[1] = noun;
            program[2] = verb;
            // if we get desired result, return value
            if (runProgram(program) == 19690720) {
                return 100 * noun + verb;
            }
        }
    }
    // if no solution found return 0
    return 0;
}
// format results
console.log("Part 1: " + part1(data));
console.log("Part 2: " + part2(data));
