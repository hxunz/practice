const speak = ['aya', 'ye', 'woo', 'ma'];

const solution = (babbling) => {
  // //aya, ye, woo, ma 같은 단어가 연속으로 사용되었는지 아닌지 확인하는 정규 표현식
  // const regexp1 = /(aya|ye|woo|ma)\1+/;

  // //aya, ye, woo, ma가 있는지 아닌지 확인하는 정규 표현식
  // const regexp2 = /^(aya|ye|woo|ma)+$/;
  // let count = 0;

  // for (let i = 0; i < babbling.length; i++) {
  //   !regexp1.test(babbling[i]) && regexp2.test(babbling[i]) ? count++ : 0
  // }

  // return count;
  // let count = 0;

  // while (babbling.length) {
  //   let word = babbling.shift();

  //   //연속되는 발음은 카운트 안하고 지나감
  //   console.log('::: ', speak.some((it) => word.includes(it)));
  //   if (speak.some((it) => word.includes(it))) continue;

  //   //단어에서 가능한 발음을 공백으로 바꾼다.
  //   word = word.replace(/^(aya|ye|woo|ma)/, '');
  //   // console.log('word::: ', word);

  //   //모두 발음 가능한 단어면 count++
  //   if (word.length === 0) count++
  // }
  // console.log('count::: ', count);
  // return count

  return babbling.map((it) => it.replace(/aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma)/g, '')).filter((it) => it === '').length;
};

test('solution', () => {
  // expect(solution(["aya", "yee", "u", "maa"])).toEqual(1);
  expect(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])).toEqual(2);
  // expect(solution(['woowo'])).toEqual(0);
  // expect(solution(['woayao'])).toEqual(0);
  // expect(solution(['maayama'])).toEqual(1);
});
