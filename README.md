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
```javascript=
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
console.log(`2. es6 문법을 이용하여 다음과 같이 출력하시오.`);
let position = `제 가게 이름은 ${name} 입니다. 위치는 ${address}에 있습니다.`;
console.log(position);

/* 결과
    제 가게 이름은 noona's fruit store 입니다. 위치는 Seoul에 있습니다.
*/
```
