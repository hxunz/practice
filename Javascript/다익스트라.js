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
  return distanceFromStart
}