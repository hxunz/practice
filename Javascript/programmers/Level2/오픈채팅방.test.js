const solution = (record) => {
  const recordArr = record.map((it) => it.split(' '));
  let userIds = new Map();
  let result = [];

  recordArr.map(it => {
    if (it[0] === "Enter" || it[0] === "Change") {
      userIds.set(it[1], it[2]);
    }
  })

  recordArr.map(it => {
    if (it[0] === 'Enter') {
      result.push(`${userIds.get(it[1])}님이 들어왔습니다.`);
    } else if (it[0] === 'Leave') {
      result.push(`${userIds.get(it[1])}님이 나갔습니다.`);
    }
  })

  return result;
};

test('chat', () => {
  expect(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])).toEqual(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
});
