const solution = (record) => {
  let last = {}
  for (let i = 0; i < record.length; i++) {
    let id = record[i].split(' ')[1]
    let name = record[i].split(' ')[2]
    if (name) {
      last[id] = name
    }
  }
  console.log('last::: ', last);
  
};

test('chat', () => {
  expect(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])).toEqual(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
});
