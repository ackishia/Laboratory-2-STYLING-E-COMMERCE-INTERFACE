function checkVariable(input) {
    switch (typeof input) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'bigint':
        case 'undefined':
            return typeof input;
        case 'object':
            
            return 'object';
        default:
            return typeof input;
    }
}


console.log("=== Problem 1 Tests ===");
console.log(checkVariable("test"));       
console.log(checkVariable(42));           
console.log(checkVariable(true));         
console.log(checkVariable(9007199254740991n)); 
console.log(checkVariable(undefined));    
console.log(checkVariable({}));           
console.log(checkVariable([]));           
console.log(checkVariable(null));         



function generateIds(count) {
    const ids = [];
    for (let i = 0; i < count; i++) {
        if (i === 5) continue; 
        ids.push(`ID-${i}`);
    }
    return ids;
}


console.log("\n=== Problem 2  ===");
console.log(generateIds(7)); // [ 'ID-0', 'ID-1', 'ID-2', 'ID-3', 'ID-4', 'ID-6' ]



function calculateTotal(...numbers) {
   
    const isValid = numbers.every(num => typeof num === 'number' && !isNaN(num));
    if (!isValid) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }
   
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


console.log("\n=== Problem 3 ===");
try {
    console.log(calculateTotal(2, 3, 5)); 
} catch (err) {
    console.log(err.message);
}
try {
    console.log(calculateTotal(1, "2", 3)); 
} catch (err) {
    console.log(err.message);
}



// Problem 4: Leaderboard Filter
// ==============================
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8) 
        .slice(0, 10) 
        .map(player => player.name) 
        .join(', '); 
}


console.log("\n=== Problem 4 ===");
const players = [
    { name: "Chris", score: 9 },
    { name: "Jackie", score: 6 },
    { name: "Charl", score: 8},
    { name: "Keshi", score: 5 },
    { name: "Jia", score: 7 }
];
console.log(getTopScorers(players));


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


console.log("\n=== Problem 5 ===");
const item = new Item("Laptop", 1000); 
console.log(item.finalPrice);



function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    } catch (err) {
        return err.message;
    } finally {
        console.log("Operation attempted");
    }
}


console.log("\n=== Problem 6 Tests ===");
console.log(safeDivide(10, 2)); 
console.log(safeDivide(5, 0));  