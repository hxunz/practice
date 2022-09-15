// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// 주어진 문자열에서 문자1개 단위 이상으로 잘라서 압축(중복 개수만큼 자르고 몇번 중복인지 숫자로 나타냄)하고
// n개 단위의 문자열로 잘라서 압축했을때 가장 짧게 압축된 문자열의 길이를 구하라

// 주어진 자료는 무엇인가?
// 문자열 s

// 조건은 무엇인가?
// s는 소문자로 이루어져있다

// 2. 계획
// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// 반복문
// substring으로 문자열 자르기 
// 마지막에 길이 비교할때 sort() 사용할 수 있을듯

// 만약 문제를 풀 수 없다면 문제를 더 단순하게 하기 위해서 주어진 조건을 버려보아라
// 예시문자열을 줄였다.'aabb'

// 주어진 자료로부터 유용한 것을 이끌어 낼 수 있는가?

// 문제에 포함된 핵심적인 개념은 모두 고려했는가?

//     몇개단위로 문자열을 자를 수 있는지 확인한다.
//     이걸 따로 저장해두자 근데 인덱스 0부터니까 몇개단위인지 파악하려면 +1 해줘야된다.

//     이 단위를 가지고 for문
//     if 현재 자른 문자열이랑 다음에 자른 문자열이랑 같은 경우에 count + 1

//     else 안에 또 if문 해서 현재 자른 문자열이랑 다음에 자른 문자열이랑 다른 경우
//     반복이 한번도 안되면 앞에 1이라는 숫자를 붙이면 안되니까 그냥 현재 자른 문자열만 추가되도록하고
//     그렇지않으면 카운트값넣고 문자열 넣어줘야댐 (왜냐 예를들어 aabbaccc이고 단위1일때 a에서 b넘어가는 순간임)

//     그리고 count는 초기화 시켜야댐 왜냐 다음 문자열 비교할때 1부터 카운트 해야되니까

//     이렇게 한것을 빈배열에 넣어준다음에
//     sort() 오름차순 정렬해서
//     0번째 인덱스 리턴


// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

const solution = (s) => {
  let splitArr = [];

  for (i = 0; i < s.length; i++) {
    let unit = i + 1;
    let splitWord = '';
    let count = 1;
    for (j = 0; j < s.length; j = j + unit) {
      let currWord = s.substring(j, j + unit);
      let nextWord = s.substring(j + unit, j + unit + unit);
      if (currWord === nextWord) {
        count++;
      } else {
        if (count === 1) {
          splitWord += currWord;
        } else {
          splitWord += count + currWord;
        }
        count = 1;
      }
    }
    splitArr.push(splitWord);
  }
  const sortSplitArr = splitArr.sort((a, b) => a.length - b.length);

  return sortSplitArr[0].length;
}

test('문자열압축', () => {
  expect(solution("aabb")).toBe(4);
  expect(solution("aabbaccc")).toBe(7);
})


// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 재귀

// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
