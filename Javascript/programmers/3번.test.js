/**
* ## 이해
*
* 미지의 것: 1번부터 N번 학생까지의 등수가 순서대로 들어있는 배열을 구하라
* 자료
*   - 각 학생의 등수는 자신보다 높은 점수를 받은 학생의 수에 1을 더한 수이다.
* 조건
*   - 점수가 같으면 등수 계산을 한번 더 안해도 됨
*
* ## 계획
*   - grade를 순회하면서 자신보다 점수가 높은 학생을 구한다.
    - 위에서 구한 학생 수를 구하고 +1을 한다.
*
* ## 실행
*
* ## 반성
*
*/

// const findStudent = (grade, index) => {
//   let score = grade[index]
//   return grade.filter((it) => it > score);
// }

// const solution = (grade) => {
//   let grades = [];

//   for (let i = 0; i < grade.length; i++) {
//     let countStudent = findStudent(grade, i);
//     grades.push(countStudent.length + 1)
//   }
//   return grades;
// };

// const solution = (grades) => {

const solution = (grades) => {
  const studentScore = {};
  const sortGrade = grades.slice().sort((a, b) => b - a);

  sortGrade.forEach((grade, index) => {
    if (!(grade in studentScore)) {
      studentScore[grade] = index;
    }
  });

  return grades.map((grade) => studentScore[grade] + 1);
};

test('solution', () => {
  expect(solution([2, 2, 1])).toEqual([1, 1, 3]);
});
