/*
  다음 출력 값으로 올바른 것은?

  var arr = [100, 200, 300];
  console.log(typeof(arr));

  1)  undefined
  2)  string
  3)  number
  4)  object
 */

export default function typeOfValue(array) {
  return "4";
}

/* 정답은 '4번'입니다. undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.
그리고 배열은 객체의 한 종류라는 사실이기 때문에 4번입니다.
배열인지 정말로 확인하고 싶다면 Array.isArray() 메소드를 활용하여 확인 할 수 있습니다.
*/
