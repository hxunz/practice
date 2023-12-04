// const solution = (t, p) => {
//   //p의 길이를 구한다.
//   const pLength = p.length;

//   //t에서 p의 길이 만큼 잘라서 새로운 배열에 넣는다.
//   let arr = [];
//   for (let i = 0; i < t.length; i++) {
//     let slice = t.slice(i, i + pLength);
//     if (slice.length === pLength) {
//       arr.push(slice);
//     }
//   }

//   //이 배열을 순회하면서 p보다 작거나 같은수가 있다면 count++해준다.
//   return arr.filter((it) => Number(it) <= Number(p)).length;
// };

// const solution = (t, p, count = 0) => {
//   let slice = t.slice(0, p.length);

//   if (t.length < p.length) {
//     return count
//   }

//   if (Number(slice) <= Number(p)) count++

//   return solution(t.slice(1), p, count)
// }

const solution = (t, p) => {
  let tt = t;
  let count = 0;

  while (true) {
    if (tt.length < p.length) {
      return count
    }

    let slice = tt.slice(0, p.length);

    if (Number(slice) <= Number(p)) count++

    tt = tt.slice(1)
  }
}

test('solution', () => {
  expect(solution("3141592", "271")).toEqual(2);
  expect(solution("500220839878", "7")).toEqual(8);
  expect(solution("10203", "15")).toEqual(3);
});
