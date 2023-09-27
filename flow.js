//1
// function maxValue(arr) {
//   const b = arr.sort().reverse();

//   return "maxValue :" + arr[0] + "\n" + "sortArr : " + arr;
// }

// const a = maxValue([1, 2, 3, 4, 5]);
// console.log(a);

// //2
// const menu = {
//   야채곱창: 5,
//   바나나우유: 10,
//   삼각김밥: 15,
//   도시락: 10,
//   샌드위치: 10,
// };

// function store(product, count) {
//   const a = menu[product];
//   if (!a) return console.log(product);
//   if (a !== count) {
//     return console.log("전산표와 일치하지 않습니다.");
//   }
//   if (a === count) return console.log("전산표와 일치합니다.");
// }

// store("바사삭치킨", 5);

//3;
function arrFunc(arrp, int) {
  for (let i = 0; i < arrp.length; i++) {
    arr[i] += 10;
  }
  //[12,11,13,14,15]

  for (j = 0; j < arrp.length; j++) {
    //[11,12,13,14,15]
    if (arrp[j] === int) {
      arrp.splice(j, 1);
      // console.log(arrp);
      return arrp;
    }
    if (j === arrp.length - 1 && arrp[j] !== int) return "결과값이 없습니다.";
  }
}
const arr = [1, 2, 3, 4, 5];
console.log("----1");
const a = arrFunc(arr, 16);
console.log("----");
console.log(a);
console.log("----");
