// 다음의코드를 es6 문법을 이용하여 재 작성하시요
let name = "noona's fruit store";
let fruites = ["banana", "apple", "mango"];
let address = "Seoul";

console.log(`1. 다음의코드를 es6 문법을 이용하여 재 작성하시요`);
let storeEs6 = { name, fruites, address };
console.log(storeEs6);

//2. es6문법을 이용하여 다음과 같이 출력하시오.
console.log(`2. es6 문법을 이용하여 다음과 같이 출력하시오.`);
let position = `제 가게 이름은 ${name} 입니다. 위치는 ${address}에 있습니다.`;
console.log(position);

// 3. 다음 코드를 Destructoring 을 이용하여 해결하시오
function calculate(obj) {
    return obj.a + obj.b + obj.c;
}
console.log(`3. 다음 코드를 Destructoring 을 이용하여 해결하시오`);
const calculateEs6 = ({ a, b, c }) => a + b + c;
const result = calculateEs6({ a: 1, b: 2, c: 3 });

console.log(result);

// 4. 다음 문제에 정답이 true 가 나오게 하시오.
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
console.log(`4. 다음 문제에 정답이 true 가 나오게 하시오.`);
const findStoreEs6 = ({ name4, address4 }) => name4 === "noona store" && address4.city === "Seoul";
console.log(findStoreEs6({ name4, fruits4, address4 })); // true

// 5. 다음과 같이 프린트 되게 코드를 바꾸시오.
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
console.log(`5. 다음과 같이 프린트 되게 코드를 바꾸시오.`);
console.log(getNumber()); // {first: 1, third: 3, forth: 4}

// 6.다음의 결과가 true 가 되게 하시오.
function getCalendar(first = "january", ...rest) {
    return first === "january" && rest[0] === "Febuary" && rest[1] === "March" && rest[2] === undefined;
}
console.log(`6.다음의 결과가 true 가 되게 하시오.`);
console.log(getCalendar("january", "Febuary", "March")); // true

// 7. 두 어레이 들 중 최소 값을 찾는 함수를 완성하시오.
function getMinimum() {
    let a = [45, 23, 78];
    let b = [54, 11, 9];
    return Math.min(...a, ...b);
}
console.log(`7. 두 어레이 들 중 최소 값을 찾는 함수를 완성하시오.`);
console.log(getMinimum());

// 8. 다음의 함수를 화상표 함수로 바꾸시오.
function sumNumbers() {
    const sum = (a, b) => a + b;
    return sum;
}

console.log(`8. 다음의 함수를 화살표 함수로 바꾸시오.`);
const sumFunction = sumNumbers();
console.log(sumFunction(3, 5));

// 9. 다음의 함수를 화상표 함수로 바꾸시오.
function sumNumbers2() {
    return addNumbers(1)(2)(3);
}

const addNumbers = (a) => (b) => (c) => a + b + c;

console.log(`9. 다음의 함수를 화살표 함수로 바꾸시오.`);
console.log(sumNumbers2());