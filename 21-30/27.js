// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

const key = prompt("이름을 입력하세요").split(" ");
const value = prompt("점수를 입력하세요").split(" ");
const obj = {};

for (i = 0; i < key.length; i++) {
  obj[key[i]] = parseInt(value[i], 10);
}
//10을 쓸때랑, 안쓸때랑 차이가 있음
console.log(obj);
