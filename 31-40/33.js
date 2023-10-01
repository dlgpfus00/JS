// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
let text = prompt("숫자를 입력하세요");

let textReverse = text.split(" ").reverse().join("");

console.log(textReverse);

//답안
// let data = prompt("숫자를 입력하세요.").split(" ").reverse();
// let result = "";

// for (let i = 0; i < data.length; i++) {
//   result = result + data[i];
// }

// console.log(result);
