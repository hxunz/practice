/**
* ## 이해
*
* 미지의 것: 게임 캐릭터가 처음 걸어본 길의 길이를 구하라
* 자료
*   - U : 위
    - D: 아래쪽으로 한 칸 가기
    - R: 오른쪽으로 한 칸 가기
    - L: 왼쪽으로 한 칸 가기
* 조건
*   -
*
* ## 계획
*   - dirs대로 움직이면서 현재 위치에서 다음 위치를 저장하고 count+1을 한다.
    - 이미 저장되어 있으면 무시한다.
    - UDRL에 맞게 계산하면서 움직인다.
    - 좌표평면을 벗어나면 무시한다.
*
* ## 실행
*
* ## 반성
*
*/

const movements = {
  'U': ([x, y]) => [x, y + 1],
  'D': ([x, y]) => [x, y - 1],
  'L': ([x, y]) => [x - 1, y],
  'R': ([x, y]) => [x + 1, y],
}
const move = (position, command) => {
  const nextPosition = movements[command](position);
  if (nextPosition[0] < -5 || nextPosition[0] > 5 || nextPosition[1] < -5 || nextPosition[1] > 5) {
    return position;
  }
  return nextPosition;
}

const solution = (dirs) => {
  let position = [0, 0];
  let location = {};
  let count = 0;

  for (let i = 0; i < dirs.length; i++) {
    const command = dirs[i];
    const nextPosition = move(position, command);
    if (position[0] === nextPosition[0] && position[1] === nextPosition[1]) {
      continue;
    }
    if (!location[`${position[0]},${position[1]},${nextPosition[0]},${nextPosition[1]}`] &&
      !location[`${nextPosition[0]},${nextPosition[1]},${position[0]},${position[1]}`]) {
      location[`${position[0]},${position[1]},${nextPosition[0]},${nextPosition[1]}`] = true;
      count++;
    }
    position = nextPosition
  }
  return count;
}

test('solution', () => {
  expect(solution("ULURRDLLU")).toEqual(7)
  expect(solution("ULURRDLLUD")).toEqual(7)
  expect(solution("LULLLLLLU")).toEqual(7)
})