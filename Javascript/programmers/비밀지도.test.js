// 매개변수 arr1과 arr2의 요소들을 각각 2진수로 나타내고 새로운 배열에 이 값들을 넣는다. 
// 2진수로 나타낸 요소를 서로 동일한 인덱스에 위치한 요소끼리 더해서 새로운 배열에 넣는다.
// 이 배열에서 요소 하나씩 반복하면서 0이면 공백으로 바꾸고 그렇지 않으면 #으로 바꾼다.
// 이때, 0이 두번 연속되면 공백은 0일 하나일때와 동일하게 바꾼다.

const solution = (n, arr1, arr2) => {
  const binary1 = arr1.map(it => parseInt(it.toString(2)));
  const binary2 = arr2.map(it => parseInt(it.toString(2)));

  const joinBinary = binary1.map((it, index) => it + binary2[index]);

  const treasureMap = joinBinary.map(it => it.toString().split(''));

  return treasureMap.map((it) => {
    return it.map(num => num === '0' ? ' ' : '#').join('').padStart(n, ' ');
  });
}

test('비밀지도', () => {
  expect(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"])
});

test('맨앞에 숫자가 0일때', () => {
  expect(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])).toEqual(["######", "###  #", "##  ##", " #### ", " #####", "### # "])
});