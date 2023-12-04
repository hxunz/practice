const dijkstra = (numberOfNode, arr) => {
  const graph = Array.from({ length: numberOfNode + 1 }, () => []);

  for (i = 0; i < arr.length; i++) {
    let me = arr[i][0]
    let me2 = arr[i][1]
    let distance = arr[i][2]

    graph[me].push([me2, distance])
    graph[me2].push([me, distance])
  }

  const distanceFromStart = Array.from({ length: numberOfNode + 1 }, () => Infinity);

  const queue = [];
  distanceFromStart[1] = 0

  queue.push([1, 0])

  while (queue.length !== 0) {
    const queueDistance = queue.map((it) => it[1]);
    const shortDistanceIndex = queueDistance.indexOf(Math.min(...queueDistance));
    const currentLocation = queue[shortDistanceIndex][0];
    const shortDistanceInqueue = queue[shortDistanceIndex][1];
    queue.splice(shortDistanceIndex, 1);

    if (distanceFromStart[currentLocation] < shortDistanceInqueue) continue;

    for (j = 0; j < graph[currentLocation].length; j++) {
      const neighbor = graph[currentLocation][j][0];
      const distanceToNeighbor = graph[currentLocation][j][1] + shortDistanceInqueue;
      if (distanceFromStart[neighbor] > distanceToNeighbor) {
        distanceFromStart[neighbor] = distanceToNeighbor
        queue.push([neighbor, distanceToNeighbor])
      }
    }
  }
  console.log('distanceFromStart::: ', distanceFromStart);
  return distanceFromStart
}

const solution = (n, paths, gates, summits) => {
  dijkstra(n, paths);
}

test('findIntensity', () => {
  // expect(solution(6, [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]], [1, 3], [5])).toEqual([5, 3]);
  expect(solution(7, [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]], [1], [2, 3, 4])).toEqual([3, 4]);
})