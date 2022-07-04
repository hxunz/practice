const Months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

const solution = (a, b) => {
  const sumDays = Months.slice(0, a - 1).reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return Days[(sumDays + b - 1) % 7];
};

test('findDay', () => {
  expect(solution(5, 24)).toEqual("TUE");
});
