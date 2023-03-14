/**
* ## 이해
* 바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 solution 함수를 작성해 주세요.
* 미지의 것:
* 자료
*   - wallpaper : 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열
    - 빈칸은 ".", 파일이 있는 칸은 "#"의 값을 가집니다.
    - 드래그는 바탕화면의 격자점 S(lux, luy)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동
    - 점 S와 점 E를 각각 드래그의 시작점, 끝점이라고 표현합니다.
    - "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의합니다.
    - 점 S에서 점 E로 드래그를 하면 바탕화면에서 두 격자점을 각각 왼쪽 위, 오른쪽 아래로 하는 직사각형 내부에 있는 모든 파일이 선택됩니다.
* 조건
*   - 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return하면 됩니다.
    - 드래그 시작점 (lux, luy)와 끝점 (rdx, rdy)는 lux < rdx, luy < rdy를 만족해야 합니다.
    - wallpaper[i][j]는 바탕화면에서 i + 1행 j + 1열에 해당하는 칸의 상태를 나타냅니다.
*
* ## 계획
*   - 주어진 wallpaper에서 제일 위에 있는 파일의 위치를 구한다.
      - start = [0,0]
      - wallpaper를 순회한다.
      - 처음 #가 발견될 때의 인덱스를 start[0]에 저장한다.
      - #의 위치 인덱스를 빈 배열에 담는다.
      - 여기서 가장 작은 수를 start[1]에 저장한다.
    - 주어진 wallpaper에서 제일 아래에 있는 파일의 위치를 구한다.
      - end = [0,0]
      - wallpaper를 순회한다.
      - 마지막 #가 발견될 때의 인덱스+1을 end[0]에 저장한다.
      - #의 위치 인덱스를 빈 배열에 담는다.
      - 여기서 가장 큰 수+1를 end[1]에 저장한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (wallpaper) => {
  let [rowIndex, columnIndex] = [[], []];

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].indexOf('#') >= 0) {
      rowIndex.push(i)
      columnIndex.push(wallpaper[i].indexOf('#'))
      columnIndex.push(wallpaper[i].lastIndexOf('#'))
    }
  }

  const start = [Math.min(...rowIndex), Math.min(...columnIndex)];
  const end = [Math.max(...rowIndex) + 1, Math.max(...columnIndex) + 1];

  return start.concat(end);
}

test('solution', () => {
  expect(solution([".#...", "..#..", "...#."])).toEqual([0, 1, 3, 4]);
  expect(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])).toEqual([1, 3, 5, 8]);
  expect(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])).toEqual([0, 0, 7, 9]);
  expect(solution(["..", "#."])).toEqual([1, 0, 2, 1]);
});
