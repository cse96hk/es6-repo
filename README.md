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
🌱 풀이
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
🌱 풀이
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
🌱 풀이
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
🌱 풀이
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
    ㄱㄷ셔구 {first, third, forth}
}
console.log(getNumber()) // 결과값 {first:1, third:3, forth:4}
```
🌱 풀이
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
