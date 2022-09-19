const solution = (cacheSize, cities) => {
  // cities를 순회하면서 cache배열 안에 있는지 체크 한다.
  // 캐시가 사용되면 가장 최근에 사용한 값이 되므로 맨 뒤에 넣는다.
  // 2 - 1. 캐시가 있는 경우, cache배열에서 city값을 지워주고, 맨 뒤에 city값을 push해줍니다.그리고 answer += 5
  // 2 - 2. 캐시가 없는 경우, cache배열에서 맨 앞의 값(사용한지 가장 오래된 값)을 제거하고 맨 뒤에 city값을 push해줍니다.그리고 answer += 1

  let cache = [];
  let time = 0;
  if (cacheSize === 0) return cities.length * 5;

  const city = cities.map((it) => it.toLowerCase());

  city.map((it) => {
    if (cache.includes(it)) {
      cache.splice(cache.indexOf(it), 1);
      cache.push(it);
      time += 1;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(it);
      time += 5;
    }
  })
  return time;
};

test('runTime', () => {
  // expect(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toEqual(50);
  // expect(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])).toEqual(21);
  // expect(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])).toEqual(60);
  expect(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])).toEqual(52);
  // expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toEqual(16);
  // expect(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toEqual(25);
});
