//WeakMap, WeakSet

let john = { name: 'john' };

let weakMap = new WeakMap();

weakMap.set(john, 'test');
console.log(weakMap.has(john));
console.log(weakMap.get(john));

john = null;

console.log(weakMap.has(john));//키가 참조하는 객체가 사라지면 키도 사라진다.

//캐싱에 활용하기

let cache = new WeakMap();

function getApi(url) {
    console.log(`[GET] -  ${url}`);
    let sum = 0;
    for (let i = 0; i < 300; i++) {
        sum += i;
    }
    return sum;
}

function process(obj) {
    if (!cache.has(obj)) {
        let result = getApi(obj.url);

        cache.set(obj, result);
    }

    return cache.get(obj);
}
let domain = { url: "http://hanbitwindow.com" };
let res1 = process(domain);
let res2 = process(domain);

console.log(res1);
console.log(res2);


let weakSet = new WeakSet();

john = { name: "john" };
pete = { name: "pete" };
mary = { name: "mary" };

weakSet.add(john);
weakSet.add(pete);
weakSet.add(mary);

console.log(weakSet.has(john));
john = null;
console.log(weakSet.has(john));
