const isMinimality = (keys, columns) => !keys.some(it => it.every(it => columns.includes(it)));

const isUnique = (rows, columns) => {
  const map = {};
  const r = rows.map(row => columns.reduce((acc, cur) => acc + row[cur], ''));
  for (let i = 0; i < r.length; i++) {
    if (map[r[i]]) {
      return false;
    }

    map[r[i]] = true;
  }
  
  return true;
};

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(el => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map(el => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const getAllKeys = (columsCount) => {
  const r = [];

  const arr = Array.from({ length: columsCount }, (_, index) => index);
  for (let i = 0; i < columsCount; i++) {
    r.push(getCombinations(arr, i + 1));
  }

  return r.flat();
};



const solution = (relation) => {
  // 모든 후보키의 후보를 구하라
  const keys = getAllKeys(relation[0].length);

  const k = keys.reduce((keyList, columns) => {
    // 해당 후보키가 최소성을 만족하는지 확인한다.
    if (!isMinimality(keyList, columns)) {
      return keyList;
    }

    // 해당 후보키가 유일성을 만족하는지 확인한다.
    if (isUnique(relation, columns)) {
      return [...keyList, columns];
    }

    return keyList;
  }, []);

  // 후보키 갯수를 반환한다.
  return k.length;
};

test('candidateKey', () => {
  expect(solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]])).toEqual(2);
});
