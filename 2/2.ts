// input array from command line, split at commas
const inputArray: string[] = process.argv[2].split(",");

// convert to array of numbers
const data: number[] = [];
inputArray.forEach(char => data.push(parseInt(char)));

function runProgram(program: number[]): number {
    // loop through each opcode of program
    for (let i = 0; i < program.length; i += 4) {
        // check for end of program
        const opcode = program[i];
        if (opcode == 99) {
            break;
        }

        // get indexes
        const inputIndex1 = program[i + 1];
        const inputIndex2 = program[i + 2];
        const outputIndex = program[i + 3];

        //get inputs
        const input1 = program[inputIndex1];
        const input2 = program[inputIndex2];

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

function part1(data: number[]): number {
    // copy data
    const program = data.slice();

    // set values according to instructions
    program[1] = 12;
    program[2] = 2;

    // run
    return runProgram(program);
}

function part2(data: number[]): number {
    // loop through every combination of noun/verb
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            // set memory to data
            const program = data.slice();

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
console.log(`Part 1: ${part1(data)}`);
console.log(`Part 2: ${part2(data)}`);
