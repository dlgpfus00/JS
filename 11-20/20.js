// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때
//  그 몫과 나머지를 공백으로 구분하여 출력하세요.

function number(num1, num2) {
  let calNum = num1 / num2;
  Math.floor(calNum);
  let calNum1 = num1 % num2;
  console.log(calNum, calNum1);
}

number(10, 2);
