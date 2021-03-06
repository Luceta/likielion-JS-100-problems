/*우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다.저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다
입출력

입력 : 1
출력 : 수성
*/

export default function SpaceName(index) {
  const spaces = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
  ];

  if (index > 9) {
    throw Error("index should be within 1-8");
  }

  return spaces[index - 1];
}
