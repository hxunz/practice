// const solution = (arr) => {
//   //   0번째 인덱스가 1인 배열(find)과 0인 배열(union)을 나눈다.
//   const union = arr.filter((it) => it[0] === 0);
//   console.log('union::: ', union);
//   const find = arr.filter((it) => it[0] === 1);

//   // 0번째 인덱스가 1인 배열(find)의 1번째 인덱스와 2번째 인덱스가 0번째 인덱스가 0인 배열(union)의 1번째 인덱스와 2번째 인덱스의 값이 동일하다면 YES 
//   // 그렇지 않으면 NO
//   let newArr = [];

//   // for (i = 0; i < union.length; i++) {
//   //   for (j = 0; j < find.length; j++) {
//   //     if (union[i][1] === find[j][1] && union[i][2] === find[j][2] || union[i][2] === find[j][1] && union[i][1] === find[j][2]) {
//   //       newArr.push('YES')
//   //     }
//   //   }
//   //   newArr.push('NO')
//   // }
//   const r = union.map((it) => {

//   })
//   console.log('newArr::: ', newArr);
// };

const solution = (arr) => {
  // 합집합의 모든 숫자를 배열unionArr에 부모로 넣는다
  const union = arr.filter((it) => it[0] === 0);
  console.log('union::: ', union);

  const unions = union.flat();
  const set = new Set(unions);
  let unionArr = [...set].filter((it) => it !== 0).sort((a, b) => a - b).map((num) => [num]);
  console.log('unionArr::: ', unionArr);

  // 위 배열을 순회하면서 서로 연결된 숫자들 중 더 큰 숫자가 작은 숫자를 가리키도록한다.
  for (i = 0; i < unionArr.length; i++) {
    for (j = 0; j < union.length; j++) {
      if (unionArr[i] === union[j][1]) {
        if (union[j][1] > union[j][2]) {
          unionArr[i].push(union[j][2])
        } else if (union[j][1] < union[j][2]) {
          unionArr[i].push(union[j][1])
        }
      }
    }
  }
  console.log('unionArr::: ', unionArr);
  const find = arr.filter((it) => it[0] === 1);
}

test('', () => {
  expect(solution([[0, 1, 3], [1, 1, 7], [0, 7, 6], [1, 7, 1], [0, 3, 7], [0, 4, 2], [0, 1, 1], [1, 1, 1]])).toEqual(['NO', 'NO', 'YES']);
});
