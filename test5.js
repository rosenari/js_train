//SET생성과 활용

let set = new Set();

let john = { name: "john" };
let pete = { name: "pete" };
let mary = { name: "mary" };

set.add(john);
set.add(pete);
set.add(mary);

console.log(set.size);

for (let user of set) {
    console.log(user);
}

set.forEach((v) => {
    console.log(v);
});

console.log(set.has(john));
