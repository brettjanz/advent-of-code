// input array from command line, split at commas
const inputArray: string[] = process.argv[2].split(" ");

// convert to array of numbers
const data: number[] = [];
inputArray.forEach(char => data.push(parseInt(char)));

function calculateFuel(mass: number): number {
    return Math.floor(mass / 3) - 2;
}

function part1(data: number[]): number {
    const modules = data.slice();

    let total = 0;
    for (let mass of modules) {
        total += calculateFuel(mass);
    }

    return total;
}

function recursiveFuel(mass: number): number {
    let fuel = calculateFuel(mass);
    if (fuel > 0) {
        fuel += recursiveFuel(fuel);
    } else {
        return 0;
    }

    return fuel;
}

function part2(data: number[]): number {
    const modules = data.slice();

    let total = 0;
    for (let mass of modules) {
        total += recursiveFuel(mass);
    }

    return total;
}

console.log(`Part 1: ${part1(data)}`);
console.log(`Part 2: ${part2(data)}`);
