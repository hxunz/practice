/**
* ## 이해
*
* 미지의 것: 개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return
* 자료
*   - 가로, 세로 길이가 n인 정사각형으로된 체스판
    - 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.
    - 퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
    - n은 12이하의 자연수 입니다.
* 조건
*   -
*
* ## 계획
*   - n 길이의 배열을 생성한다.
    - 퀸을 배치한다.
    - 퀸이 가로,세로, 대각선에 위치하지 않는다면 count+1을 한다.
    - count 값을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const dfs = (row, n, stack) => {
  if (n === row) {
    return answer += 1
  }

  for (let col = 0; col < n; col++) {
    stack[row] = col;
    let check = true;
    for (let i = 0; i < row; i++) {
      if (stack[row] === stack[i]) {
        check = false;
        break;
      }
      if (Math.abs(stack[row] - stack[i]) === Math.abs(i - row)) {
        check = false;
        break;
      }
    }
    if (check) {
      return dfs(row + 1)
    }
  }
}


const solution = (n) => {
  let answer = 0;
  let stack = Array.from({ length: n }, () => 0)
  for (let i = 0; i < n; i++) {
    stack[0] = i
    dfs(1, n, stack)
  }
  return answer;
};

test('dfs', () => {
  expect(dfs(4)).toEqual(2);
});

test('solution', () => {
  expect(solution(4)).toEqual(2)
});
