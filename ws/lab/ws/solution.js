// Problem 1: The Strict Type Checker
function checkVariable(input) {
    switch (typeof input) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'bigint':
        case 'undefined':
            return typeof input;
        default:
            return 'object';
    }
}

// Problem 2: Secure ID Generator
function generateIDs(count) {
    const ids = [];
    for (let i = 0; i < count; i++) {
        if (i === 5) continue;
        ids.push(`ID-${i}`);
    }
    return ids;
}

// Problem 3: The Functional Sum
function calculateTotal(...numbers) {
    const invalid = numbers.some(num => typeof num !== 'number');
    if (invalid) throw new TypeError('Invalid input: All arguments must be numbers');
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8)
        .slice(0, 10)
        .map(player => player.name)
        .join(', ');
}

// Problem 5: The Private Inventory
class Item {
    #discount = 0.1;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}
// Test for Item class (uncomment to run)
// const testItem = new Item('Laptop', 1000);
// console.log(testItem.finalPrice); // Should log 900

// Problem 6: Robust Division
function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
    } catch (err) {
        return err.message;
    } finally {
        console.log('Operation attempted');
    }
}