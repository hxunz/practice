/**
* ## 이해
*
* 미지의 것: 오늘 날짜를 의미하는 문자열 today, 약관의 유효기간을 담은 1차원 문자열 배열
 terms와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies가 매개변수로 주어집니다.
 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return
* 자료
*   - 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.
* 조건
*   - 날짜는 28일까지 밖에 없다.
*
* ## 계획
*   - 약관 종류에 따라서 해당 약관의 개인정보 유효기간을 계산한다.
      - privacies를 년,월,일,약관종류로 쪼갠다.
      - terms에서 약관 종류와 일치하는 숫자를 구한다.
      - 이 숫자를 월에 더한다.
      - 월에 더했을 때 12가 넘으면 더한값/12+년 더한값%12+월
    - 유효기간이 오늘 날짜를 지나지 않았으면 폐기 오늘날짜를 지났으면 보관
      - 오늘날짜의 년과 계산된 유효기간의 년을 비교
      - 오늘날짜의 월과 계산된 유효기간의 월을 비교
      - 오늘날짜의 일과 계산된 유효기간의 일을 비교
    - 보관된 개인정보의 번호를 배열에 담아서 리턴
*
* ## 실행
*
* ## 반성
*
*/
const calculateRemainDate = (terms, privacies) => {
  const objectTerms = {};
  for (let i = 0; i < terms.length; i++) {
    const [policy, period] = terms[i].split(' ');
    objectTerms[policy] = Number(period)
  }

  return privacies.map((privacy) => {
    const [date, policy] = privacy.split(' ');
    const [year, month, day] = date.split('.').map((it) => Number(it))
    const period = objectTerms[policy];

    if ((month + period) % 12 === 0) {
      return [
        (Math.floor((month + period) / 12) + year > 1)
          ? (Math.floor((month + period) / 12) + year - 1)
          : year,
        12,
        day,
      ]
    }

    return [
      Math.floor((month + period) / 12) + year,
      (month + period) % 12,
      day
    ]
  })
}

const isExpired = (today, target) => {
  if (today[0] > target[0]) {
    return true;
  } else if (today[0] < target[0]) {
    return false;
  } else {
    if (today[1] > target[1]) {
      return true;
    } else if (today[1] < target[1]) {
      return false;
    } else {
      if (today[2] > target[2]) {
        return true;
      } else if (today[2] < target[2]) {
        return false;
      } else {
        return true
      }
    }
  }
};

const solution = (today, terms, privacies) => {
  const convertedToday = today.split('.').map((it) => Number(it))
  const remainDates = calculateRemainDate(terms, privacies);
  const result = [];
  for (let i = 0; i < remainDates.length; i++) {
    if (isExpired(convertedToday, remainDates[i])) {
      result.push(i + 1)
    }
  }
  return result;
};

test('solution', () => {
  expect(solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )).toEqual([1, 3]);
  expect(solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
  )).toEqual([1, 4, 5]);
});

test('calculateRemainDate', () => {
  expect(calculateRemainDate(
    ["A 6", "B 12", "C 3", "D 23"],
    [
      "2021.05.02 A",
      "2021.07.01 B",
      "2022.02.19 C",
      "2022.02.20 C",
      "2022.09.20 C",
      "2022.10.20 C",
      "2022.12.20 C",
      "2022.01.20 D",
    ]
  )).toEqual([
    [2021, 11, 2],
    [2022, 7, 1],
    [2022, 5, 19],
    [2022, 5, 20],
    [2022, 12, 20],
    [2023, 1, 20],
    [2023, 3, 20],
    [2023, 12, 20],
  ])
});

test('isExpired', () => {
  expect(isExpired(
    [2022, 5, 19],
    [2021, 11, 2],
  )).toEqual(true)
  expect(isExpired(
    [2022, 5, 19],
    [2022, 7, 1],
  )).toEqual(false)
  expect(isExpired(
    [2022, 5, 19],
    [2022, 5, 19],
  )).toEqual(true)
  expect(isExpired(
    [2022, 5, 19],
    [2022, 5, 20],
  )).toEqual(false)
});