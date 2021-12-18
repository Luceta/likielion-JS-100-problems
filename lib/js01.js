/*
  다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

  var nums = [100, 200, 300, 400, 500];

 */

export default function deleteNumFromArray(array) {
  array.splice(-2);

  return array;
}

/* 다른 답안 예시:
nums.pop();
nums.pop();
*/
