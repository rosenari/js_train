//MAP

let map = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let entry of map) {
    console.log(entry);
}

let obj = {
    name: 'john',
    age: 30
}

console.log(Object.entries(obj))

console.log(map.get('onion'));