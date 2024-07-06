# 최신 자바스크립트 기술(2주 6일)

> 1. ES6 자바스크립트 최신 문법

### 1. 다음의 코드를 es6 문법을 이용하여 재작성 하시오
🌱 예제
```
let name = "noona's fruit store";
let fruites = ["banana", "apple", "mango"];
let address = "Seoul";
let store = { name: name, fruites: fruites, address: address };
console.log(store);
```
#### 🔥 풀이
``` 
let name = "noona's fruit store";
let fruites = ["banana", "apple", "mango"];
let address = "Seoul";

let storeEs6 = { name, fruites, address };
console.log(storeEs6);

/* 결과
{
    "name": "noona's fruit store",
    "fruites": [
        "banana",
        "apple",
        "mango"
    ],
    "address": "Seoul"
}
*/
```

### 2. es6문법을 이용하여 다음과 같이 출력하시오.
🌱 예제
```
제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul에 있습니다.
```
#### 🔥 풀이
```
let name = "noona's fruit store";
let fruites = ["banana", "apple", "mango"];
let address = "Seoul";

let position = `제 가게 이름은 ${name} 입니다. 위치는 ${address}에 있습니다.`;
console.log(position);

/* 결과
    제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul에 있습니다.
*/
```

### 3. 다음 코드를 Destructoring 을 이용하여 해결하시오
🌱 예제
```
function calculate(obj) { // 함수 안을 바꾸시오
    return obj.a+obj.b+obj.c
}
calculate({a:1,b:2, c:3})
```
#### 🔥 풀이
```
const calculateEs6 = ({ a, b, c }) => a + b + c;
const result = calculateEs6({ a: 1, b: 2, c: 3 });
console.log(result);
// 6
```

### 4. 다음 문제에 정답이 true 가 나오게 하시오.
🌱 예제
```
let nam="noona store"
let fruits = ["banana", "apple", "mango"]
let address={
    country: "Korea",
    city:"Seoul"
}

function findDtore(obj){
    return naame ==="noona store" && city == "Seoul"
}
console.log(findStore({name,fruits,address}))
```
#### 🔥 풀이
```
let name4 = "noona store";
let fruits4 = ["banana", "apple", "mango"];
let address4 = {
    country: "korea",
    city: "Seoul",
};

function findStore(name4, fruits4, address4) {
    console.log("name4 : ", name4);
    console.log("fruits4 : ", fruits4);
    console.log("address4 : ", address4);
    return name4 === "noona store" && address4.city === "Seoul";
}

const findStoreEs6 = ({ name4, address4 }) => name4 === "noona store" &&
     address4.city === "Seoul";
console.log(findStoreEs6({ name4, fruits4, address4 }));
// true
```

### 5. 다음과 같이 프린트 되게 코드를 바꾸시오.
🌱 예제
```
function getNumber() {
    let array = [1,2,3,4,5,6] // 여기서부터 바꾸시오
    return {first, third, forth}
}
console.log(getNumber()) // 결과값 {first:1, third:3, forth:4}
```
#### 🔥 풀이
```
function getNumber() {
    let array = {
        first: 1,
        second: 2,
        third: 3,
        forth: 4,
        fifth: 5,
        sixth: 6,
    };

    let { first, third, forth } = array;
    return { first, third, forth };
}
console.log(getNumber()); 
// {first: 1, third: 3, forth: 4}
```

### 6.다음의 결과가 true 가 되게 하시오.
🌱 예제
```
function getCalendar(first, ...rest) {
    return (
        first === "January" &&
        rest[0] === "Febuary" &&
        rest[1] === "Maarch" &&
        rest[2] === undefined
    );
}
console.log(getCalendar()) // 여기를 바꾸시오
```
#### 🔥 풀이
```
function getCalendar(first = "january", ...rest) {
    return first === "january" 
    && rest[0] === "Febuary" 
    && rest[1] === "March" 
    && rest[2] === undefined;
}
console.log(getCalendar("january", "Febuary", "March")); 
// true
```
### 7. 두 어레이 들 중 최소 값을 찾는 함수를 완성하시오.
🌱 예제
```
function getMinimum() {
    let a = [45,23,78]
    let b = [54,11,9]
    return Math.min() // 여기를 바꾸시오
}
console.log(getMinimum())
```
#### 🔥 풀이
```
function getMinimum() {
    let a = [45, 23, 78];
    let b = [54, 11, 9];
    return Math.min(...a, ...b);
}
console.log(getMinimum());
// 9
```

### 8. 다음의 함수를 화상표 함수로 바꾸시오.
🌱 예제
```
function sumNumber() {
    //여기서부터 바꾸시오
    const sum = function(a,b) {
        return a+b;
    }
    return sum(40,10)
}
```
#### 🔥 풀이
```
function sumNumbers() {
    const sum = (a, b) => a + b;
    return sum;
}
const sumFunction = sumNumbers();
console.log(sumFunction(3, 5));
//8
```

### 9. 다음의 함수를 화상표 함수로 바꾸시오.
🌱 예제
```
function sumNumber() {
    // 여기를 바꾸시오
    return addNumber(1)(2)(3);
    function addNumber(a) {
        return function(b) {
            return function(c) {
                return a+b+c;
            };
        };
    }
}
console.log(sumNumber())
```
#### 🔥 풀이
```
function sumNumbers2() {
    return addNumbers(1)(2)(3);
}

const addNumbers = (a) => (b) => (c) => a + b + c;
console.log(sumNumbers2());
// 6
```
