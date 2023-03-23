/**
* ## 이해
*
* 미지의 것: 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return
* 자료
*   - 정수로 이루어진 배열 numbers
    - 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
    - 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.
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

const solution = (numbers) => {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];
  
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
};

test('solution', () => {
  expect(solution([2, 3, 3, 5])).toEqual([3, 5, 5, -1])
});
