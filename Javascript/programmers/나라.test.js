// 준원이는 게임을 만들고 있다. 게임에는 N개의 나라가 있다.
// 준원이는 각 나라의 영토를 나타내는 세계 지도를 그리고 있다.
// 세계 지도는 직사각형 모양이다. 세계 지도 안에 있는 각 나라의 영토 또한 직사각형 모양이다.
// 만약 두 나라의 영토가 서로 모서리를 맞대고 있다면, 두 나라 사이를 걸어서 이동할 수 있다.
// 서로 모서리를 맞대고 있지 않다면(꼭짓점만을 맞대고 있는 경우도 포함한다.) 두 나라 사이를 걸어서 이동할 수 없다.
// 준원이는 각 나라에 대해서, 다음과 같은 질문의 답을 계산 해야 한다.
// 이 나라에서, 걸어서 방문할 수 있는 다른 나라의 개수는 몇 개 인가?
// 단, 다른 나라들을 경유해서 방문해야 하는 경우도 방문할 수 있다고 간주한다.
// 이 값을 모든 나라에 대해서 계산하라.
// n: 나라의 개수를 나타내는 정수
// x1[i], y1[i],x2[1],y2[i]: i번 나라의 영토의 완쪽 아래 꼭짓점(x1[i], y1[i])과 오른쪽 위 꼭짓점(x2[i], y2[i])의 좌표를 나타내는 정수
// 단, 두 나라의 영토가 겹치는 경우는 없다.

const solution = (n, x1, y1, x2, y2) => {
  // 각 나라를 노드로 하는 그래프를 만들기 위한 배열
  const graph = new Array(n).fill(null).map(() => new Set());

  // 모든 나라 쌍에 대해 두 나라의 영토가 겹치는지 확인하여 간선을 추가
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (
        x1[i] <= x2[j] &&
        x2[i] >= x1[j] &&
        y1[i] <= y2[j] &&
        y2[i] >= y1[j]
      ) {
        // i번 나라에서 j번 나라로 가는 간선 추가
        graph[i].add(j);
        // j번 나라에서 i번 나라로 가는 간선 추가
        graph[j].add(i);
      }
    }
  }

  // 각 나라에서 시작하여 DFS를 수행하고, 방문한 노드의 개수를 구함
  const visited = new Array(n).fill(false);
  const dfs = (start) => {
    // 시작 노드를 방문했으므로 방문 처리
    visited[start] = true;
    // 시작 노드와 연결된 모든 노드에 대해 반복
    for (const next of graph[start]) {
      // 방문하지 않은 노드일 경우 DFS 수행
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  // 각 나라에서 DFS를 수행한 결과를 배열에 담아 반환
  const visitByWalks = new Array(n);
  for (let i = 0; i < n; i++) {
    // visited 배열 초기화
    visited.fill(false);
    // i번 나라에서 DFS 수행
    dfs(i);
    // 방문한 노드의 개수를 구하여 visitByWalks 배열에 저장
    visitByWalks[i] = visited.filter((x) => x).length;
  }
  return visitByWalks;
};

test('solution', () => {
  expect(solution(4, [10, 30, 65, 10], [15, 40, 40, 70], [40, 65, 80, 30], [40, 60, 70, 90])).toEqual([3, 3, 3, 1]);
});