// 오늘 날짜로 파기해야 하는 개인정보 번호들을 구하라
// 모든 달은 28일까지 있다.


const solution = (today, terms, privacies) => {
  const todayArr = today.split('.').map((it) => Number(it));
  console.log('todayArr::: ', todayArr);
  const term = terms.map((it) => it.split(' ')).map((num) => [num[0], Number(num[1])]);
  console.log('term::: ', term);
  const privacyDate = privacies.map((it) => it.split(' ')).map((day) => day[0].split('.')).map((num) => num.map((i) => Number(i)));
  console.log('privacyDate::: ', privacyDate);
  const privacyType = privacies.map((it) => it.split(' ')).map((type) => type[1]);
  console.log('privacyType::: ', privacyType);

  let periode = [];
  for (let i = 0; i < privacyDate.length; i++) {
    for (let j = 0; j < term.length; j++) {
      if (privacyType[i] === term[j][0]) {
        if (privacyDate[i][1] + term[j][1] <= 12) {
          if (privacyDate[i][2] - 1 === 0) {
            if (privacyDate[i][1] + term[j][1] - 1 === 0) {
              periode.push([privacyDate[i][0] - 1, 12, 28])
            } else {
              periode.push([privacyDate[i][0], privacyDate[i][1] + term[j][1] - 1, 28])
            }
          } else {
            periode.push([privacyDate[i][0], privacyDate[i][1] + term[j][1], privacyDate[i][2] - 1])
          }
        } else if (privacyDate[i][1] + term[j][1] > 12) {
          if (privacyDate[i][2] - 1 === 0) {
            if (privacyDate[i][1] + term[j][1] - 13 === 0) {
              periode.push([privacyDate[i][0], 12, 28])
            } else {
              periode.push([privacyDate[i][0] + 1, privacyDate[i][1] + term[j][1] - 13, 28])
            }
          } else {
            if (term[j][1] >= 12) {
              if (privacyDate[i][1] + Math.floor(term[j][1] % 12) > 12) {
                periode.push([privacyDate[i][0] + (Math.floor(term[j][1] / 12)), privacyDate[i][1] + Math.floor(term[j][1] % 12) - 12, privacyDate[i][2] - 1]);
              } else {
                periode.push([privacyDate[i][0] + (Math.floor(term[j][1] / 12)), privacyDate[i][1] + Math.floor(term[j][1] % 12), privacyDate[i][2] - 1]);
              }
            } else {
              periode.push([privacyDate[i][0] + 1, privacyDate[i][1] + term[j][1] - 12, privacyDate[i][2] - 1]);
            }
          }
        }
      }
    }
  }
  console.log('periode::: ', periode);

  let answer = [];
  periode.map((it) => {
    if (it[0] < todayArr[0]) {
      answer.push(periode.indexOf(it) + 1)
    } else if (it[0] === todayArr[0] && it[1] < todayArr[1]) {
      answer.push(periode.indexOf(it) + 1)
    } else if (it[0] === todayArr[0] && it[1] === todayArr[1] && it[2] < todayArr[2]) {
      answer.push(periode.indexOf(it) + 1)
    }
  });
  // periode.map((it) => {
  //   if (it[0] < todayArr[0]) {
  //     answer.push(it)
  //   }
  //   if (it[0] >= todayArr[0] && it[1] < todayArr[1]) {
  //     answer.push(it)
  //   }
  //   if (it[0] >= todayArr[0] && it[1] === todayArr[1] && it[2] < todayArr[2]) {
  //     answer.push(it)
  //   }
  // });
  console.log('answer::: ', answer);
  return answer
};


test('personalNumber', () => {
  expect(solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'])).toEqual([1, 3]);
  expect(solution('2022.05.19', ['A 6', 'B 12'], ['2022.05.02 A', '2021.03.01 B'])).toEqual([2]);
  expect(solution('2022.05.19', ['A 25', 'B 1'], ['2020.04.02 A', '2022.06.01 B'])).toEqual([1]);
  expect(solution('2022.05.19', ['A 1', 'B 9'], ['2022.04.02 A', '2022.03.01 B'])).toEqual([1]);
  expect(solution('2022.05.19', ['A 6', 'B 12', 'C 5'], ['2022.05.02 A', '2021.06.01 B', '2020.05.19 C'])).toEqual([3]);
  expect(solution('2020.01.01', ['Z 3', 'D 5'], ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'])).toEqual([1, 4, 5]);
  expect(solution('2028.12.12', ['D 100'], ['2020.12.12 D'])).toEqual([1]);
  expect(solution('2021.12.12', ['D 16'], ['2020.09.12 D'])).toEqual([1]);
  expect(solution('2021.12.12', ['D 16'], ['2020.09.12 D', '2021.09.12 D', '2021.08.12 D', '2021.12.11 D', '2021.11.12 D', '2021.09.2 D', '2021.04.12 D', '2021.10.15 D', '2021.09.2 D', '2021.09.12 D',])).toEqual([1]);
});
