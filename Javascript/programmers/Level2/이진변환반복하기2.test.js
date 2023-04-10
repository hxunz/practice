/**
* ## 이해
*
* 미지의 것: s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
          이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return
* 자료
*   - 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
    - x의 모든 0을 제거합니다.
    - x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
* 조건
*   -
*
* ## 계획
*   - s에 대해서 이진 변환을 한다.
      - s의 모든 0을 제거한다. 이때 제거되는 0의 개수를 저장해둔다.
      - s.length를 2진법으로 표현한 문자열로 바꾼다.
      - count+1을 한다.
    - s가 1이 되면 저장된 0의 개수와 count 수를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (s) => {
  let str = s;
  let binaryCount = 0;
  let zeroCount = 0;

  while (true) {
    if (str === '1') {
      return [binaryCount, zeroCount]
    }
    //0의 개수를 저장한다.
    if (str.match(/[0]/g) !== null) {
      zeroCount += str.match(/[0]/g).length;
      //str의 모든 0을 제거한다.
      str = str.replace(/[0]/g, '');
    }

    // str.length를 2진법으로 표현한 문자열로 바꾼다.
    str = str.length.toString(2);

    binaryCount += 1;
  }
};

test('solution', () => {
  expect(solution("110010101001")).toEqual([3, 8]);
  expect(solution("01110")).toEqual([3, 3]);
  expect(solution("1111111")).toEqual([4, 1]);
});
