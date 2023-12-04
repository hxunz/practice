const solution = (m, musicinfos) => {
  //악보에 사용되는 음 = C, C#, D, D#, E, F, F#, G, G#, A, A#, B

  //musicinfos에서 악보만 거른다.
  const sheets = musicinfos.map((it) => it.split(',')).map((sheet) => sheet[3]);
  console.log('m.split()::: ', m.split('').join('|'));
  const M = m.split('').join('|')
  const regexM = new RegExp(`^[${M}]+$`);
  console.log('regesM::: ', regexM);

  //sheets를 순회하면서 sheets의 계이름이 m에 포함되어있으면 ''로 replace한다.
  let note = [];
  for (let i = 0; i < sheets.length; i++) {
    note.push(sheets[i].replace(regexM, ''))
  }
  console.log('note::: ', note);

  const find = note.filter((it) => it.length === 0);
  //note에 ''이 하나만 있다면 해당 인덱스를 찾아서 musicinfos에서 그 인덱스를 찾고 노래 제목을 리턴한다.

  //일치하는 음악이 많다면 재생시간을 비교한다.
  const s = musicinfos.map((it) => it.s(','));
  console.log('s::: ', s);
  let playTime = [];
  playTime.push(s[0].split(':'))
  playTime.push(s[1].split(':'))
  console.log('playTime::: ', playTime);
  //재생시간이 제일 긴 음악의 제목을 리턴한다.
};

test('solution', () => {
  expect(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])).toEqual("HELLO");
});
