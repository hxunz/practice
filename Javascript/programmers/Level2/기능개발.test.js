/**
* ## 이해
*
* 미지의 것: 각 배포마다 몇 개의 기능이 배포되는지를 return
* 자료
*   - 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있다.
    - 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
    - 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses
    - 각 작업의 개발 속도가 적힌 정수 배열 speeds
* 조건
*   -
*
* ## 계획
*   - progresses마다 배포 날짜를 구한다.
    - 배포 날짜가 100을 넘는다면 자르고 그 갯수를 result에 넣는다.
    - progresses가 0이 되면 result를 리턴한다.
* ## 실행
*
* ## 반성
*
*/

const solution = (progresses, speeds) => {
  let result = [];

  while (true) {
    let count = 0;
    if (progresses.length === 0) {
      return result
    }

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] >= 100) {
        result.push(progresses.slice(0, i).length + 1);
        progresses = progresses.slice(i + 1)
        speeds = speeds.slice(i + 1)
      } else {
        progresses[i] += speeds[i]
      }
    }
  }
}

test('solution', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  // expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
})