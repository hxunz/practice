const solution = (N, road, K) => {
  console.log('road::: ', road);
  // let city = [];

  const city = road.filter((it) => it[0] === 1);
  // second.filter((it) => {
  //   if (it[2] <= K) {
  //     return city.push(it)
  //   }
  // })

  console.log('city::: ', city);
  let newCity = [];

  for (i = 0; i < road.length; i++) {
    for (j = 0; j < city.length; j++){
      if (road[i][0] === city[j][1]) {
        if (road[i][2] + city[j][2] <= K) {
          newCity.push(road[i])
        }
      }
      if (road[i][1] === city[j][1]) {
        if (road[i][2] + city[j][2] <= K) {
          newCity.push(road[i])
        }
      }
    }
  }
  console.log('new::: ', newCity );

  const canDelivery = city.concat(newCity);
  console.log('canDelivery::: ', canDelivery);

  let delivery = [];
  for (i = 0; i < canDelivery.length; i++) {
    delivery.push(canDelivery[i][1])
    delivery.push(canDelivery[i][0])
  }
  console.log('delivery::: ', delivery);

  const set = new Set(delivery);
  const deliveryCity = [...set];
  console.log('deliveryCity::: ', deliveryCity);
  return deliveryCity.length;
}

test('countCity', () => {
  // expect(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3)).toEqual(4);
  expect(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4)).toEqual(4);
});
