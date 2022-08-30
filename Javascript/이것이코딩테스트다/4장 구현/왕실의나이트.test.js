const solution = (locate) => {
  const location = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8
  }

  const findLocation = locate.split('');
  const currentLocation = [Object.getOwnPropertyDescriptor(location, findLocation[0]).value, Number(findLocation[1])];

  let count = 0;

  //수평으로 두칸 이동 후에 수직으로 한칸 이동
  if (currentLocation[1] + 2 > 1 && currentLocation[1] + 2 < 8) {
    if (currentLocation[0] + 1 > 1 && currentLocation[0] + 1 < 8) {
      count++;
    }
    if (currentLocation[0] - 1 > 1 && currentLocation[0] - 1 < 8) {
      count++;
    }
  }

  if (currentLocation[1] - 2 > 1 && currentLocation[1] - 2 < 8) {
    if (currentLocation[0] + 1 > 1 && currentLocation[0] + 1 < 8) {
      count++;
    }
    if (currentLocation[0] - 1 > 1 && currentLocation[0] - 1 < 8) {
      count++;
    }
  }

  //수직으로 두칸 이동 후에 수평으로 한칸이동
  if (currentLocation[0] + 2 > 1 && currentLocation[0] + 2 < 8) {
    if (currentLocation[1] + 1 > 1 && currentLocation[1] + 1 < 8) {
      count++;
    }
    if (currentLocation[1] - 1 > 1 && currentLocation[1] - 1 < 8) {
      count++;
    }
  }

  if (currentLocation[0] - 2 > 1 && currentLocation[0] - 2 < 8) {
    if (currentLocation[1] + 1 > 1 && currentLocation[1] + 1 < 8) {
      count++;
    }
    if (currentLocation[1] - 1 > 1 || currentLocation[1] - 1 < 8) {
      count++;
    }
  }
  return count
};

test('coordinate', () => {
  expect(solution('a1')).toEqual(2);
});
