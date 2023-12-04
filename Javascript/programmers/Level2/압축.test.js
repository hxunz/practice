/**
* ## 이해
*
* 미지의 것: 주어진 문자열을 압축한 후의 사전 색인 번호를 배열로 출력하라.
* 자료
*   - 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
    - 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
    - w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
    - 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
    - 두번째로 돌아간다.
* 조건
*   -
*
* ## 계획
*   -
*
* ## 실행
*
* ## 반성
*
*/

const solution = (msg) => {
  let word = [];
  for (let i = 65; i < 91; i++) {
    word.push(String.fromCharCode(i))
  };
  console.log('word::: ', word);

  for (let i = 0; i < msg.length; i++) {
    if(msg)
  }
}

test('solution', () => {
  expect(solution('KAKAO')).toEqual([11, 1, 27, 15])
})