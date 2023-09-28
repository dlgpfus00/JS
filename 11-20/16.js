// 문장이 입력되면
// 거꾸로 출력하는 프로그램을 만들어 봅시다.

function reverse(text) {
  let reverseText = text.split("").reverse().join("");

  console.log(reverseText);
}

reverse("거꾸로");
