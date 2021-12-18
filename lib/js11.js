/*
  1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.
  let s = 0;

  console.log(s);
 */

export default function sumOneToHundred() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}
