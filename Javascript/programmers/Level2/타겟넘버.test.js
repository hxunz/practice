// 원하는 것: n개의 양수들이 있는데, 이 양수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 하는데, 이 때
//          가능한 경우의 수를 반환하라
// 자료:
//   numbers
//   target
//   양수들만 있다.
//   [1, 1, 1, 1, 1]
//   1 - 1 + 1 + 1 + 1 = 3
//   전체합 첫 번째거를 빼고 더한거에서 첫 번째거를 빼본다 => 3이다.
//   전체합 두번째거를 빼고 더한거에서 두 번째거를 빼본다 => 3이다.
// ...
//   답이 5다.

//   [4, 1, 2, 1] => 4

// 모든 조합을 뽑아낸다. => 0, 1, 2, 3, [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3], [0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]
// 각 조합으로 원하는 값이 나오는지 해본다.
//   => 조합을 제외한 나머지 값을 더한 다음에, 조합값을 빼봤을 때 타겟이 나오나
// 되는 것만 더한다

const solution = (numbers, target, acc = 0) => {
  if (numbers.length === 0) {
    return target === acc ? 1 : 0
  }

  const [first] = numbers;

  const plus = first;
  const minus = -first;

  return solution(numbers.slice(1), target, acc + plus) +
    solution(numbers.slice(1), target, acc + minus);

}
