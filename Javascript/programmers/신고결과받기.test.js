const run = (users, reports, limit) => {
  const report = {};
  reports.map(it => it.split(' '))
    .forEach(([reporter, target]) => {
      if (report[target]) {
        if (!report[target].includes(reporter)) {
          report[target] = [...report[target], reporter];
        }
      } else {
        report[target] = [reporter];
      }
    });

  const bannedPeople = Object.entries(report).filter(([_, value]) => value.length >= limit).map(([key, _]) => key);

  const reportLog = {};
  reports.map(it => it.split(' '))
    .forEach(([reporter, target]) => {
      if (reportLog[reporter]) {
        if (!reportLog[reporter].includes(target)) {
          reportLog[reporter] = [...reportLog[reporter], target];
        }
      } else {
        reportLog[reporter] = [target];
      }
    });

  const result = users.map(userId => {
    const reportPeople = reportLog[userId];
    if (!reportPeople) {
      return 0;
    }
    return reportPeople.filter(it => bannedPeople.includes(it))
      .length;
  });

  return result;
};

test('run', () => {
  expect(
    run(
      ['muzi', 'frodo'],
      ['muzi frodo'],
      1,
    ),
  ).toEqual([1, 0]);

  expect(
    run(
      ['muzi', 'frodo'],
      [
        'muzi frodo',
        'frodo muzi',
      ],
      1,
    ),
  ).toEqual([1, 1]);
});

test('여러명을 한 명이 신고한 케이스',() => {
  expect(
    run(
      ['muzi', 'frodo', 'gyu'],
      [
        'muzi frodo',
        'gyu frodo',
      ],
      2,
    ),
  ).toEqual([1, 0, 1]);
});

test('내가 여러명 신고했을 떄', () => {
  expect(
    run(
      ['muzi', 'frodo', 'gyu'],
      [
        'muzi frodo',
        'muzi gyu',
      ],
      1,
    ),
  ).toEqual([2, 0, 0]);
});

test('중복 신고했을 경우', () => {
  expect(
    run(
      ['muzi', 'frodo', 'gyu'],
      [
        'muzi frodo',
        'muzi frodo',
      ],
      2,
    ),
  ).toEqual([0, 0, 0]);
});