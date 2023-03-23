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
    //stack이 비어져있지 않고 현재 숫자보다 작은 숫자가 있는 경우 반복한다.
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      //스택에서 인덱스를 하나씩 꺼내서 해당 인덱스의 값을 numbers[i]로 바꿔서 뒤에 있는 큰 수를 찾는다.
      answer[stack.pop()] = numbers[i];
      //이를 반복하면서 스택에 남아있는 인덱스들에 대해서도 뒤에 있는 큰 수를 찾아낸다. 
    }
    stack.push(i);
  }
  return answer;
};

test('solution', () => {
  expect(solution([2, 3, 3, 5])).toEqual([3, 5, 5, -1])
});
