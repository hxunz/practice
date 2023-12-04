// const solution = (arr) => {
//   const nodes = getUniqueNodes(arr);

//   // union 함수를 사용해서 현재 노드의 루트노드를 짝지어서 배열로 리턴
//   const result = arr.map(([parent, child]) => {
//     return union(nodes, parent, child);
//   });

//   console.log('result::: ', result);
// };

const getUniqueNodes = (arr) => {
  const newArr = arr.flat();
  const set = new Set(newArr);
  return [...set].filter((it) => it !== 0).sort((a, b) => a - b);
}

// const union = (arr, p, c) => {
//   if (arr[c - 1] > arr[p - 1]) {
//     arr[c - 1] = arr[p - 1];
//   } else {
//     arr[p - 1] = arr[c - 1];
//   }
//   return arr;
// }


const solution = (arr) => {
  const nodes = getUniqueNodes(arr);

  for (i = 0; i < arr.length; i++) {
    if (nodes[arr[i][0] - 1] < nodes[arr[i][1] - 1]) {
      nodes[arr[i][1] - 1] = nodes[arr[i][0] - 1]
    } else {
      nodes[arr[i][0] - 1] = nodes[arr[i][1] - 1]
    }
  }
  return nodes
}

const findRoot = (arr, x) => {
  //루트 노드 구하기
  // 알고 있는 것 :  서로 연결되어있는 arr, 찾아야할 노드 번호, 찾아야할 노드 번호의 부모 노드, 노드 번호와 부모가 다르면 루트 노드가 아니다., 노드 번호와 부모가 같으면 루트 노드이다.
  // arr는 연결되어 있는 노드를 알려준다. 부모 테이블을 계속해서 확인하며 거슬러 올라가야한다.

  // 전체 노드 번호를 구한다.
  // arr를 순회하면서 서로 연결된 노드중 작은 노드를 부모라고 한다.

  // 최종적인 루트 노드 출력해야됨
}

// const union = (arr, a, b) => {
//   const aRoot = findRoot();
//   const bRoot = findRoot();
//   arr[b] = a
// }

// const solution = (arr) => {
//   const newArr = arr.flat();
//   const set = new Set(newArr);
//   let unionArr = [...set].filter((it) => it !== 0).sort((a, b) => a - b);


// for (i = 0; i < arr.length; i++) {
//   if (unionArr[arr[i][0] - 1] < unionArr[arr[i][1] - 1]) {
//     if (arr[i][0] < arr[i][1]) {
//       unionArr[arr[i][1] - 1] = arr[i][0]
//     }
//   }
// }
// console.log('unionArr::: ', unionArr);

// }

test('union', () => {
  expect(solution([[1, 4], [2, 3], [2, 4], [5, 6]])).toEqual([1, 1, 2, 1, 5, 5]);
})