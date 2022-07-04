// https://programmers.co.kr/learn/courses/30/lessons/67256

//1. 이해
// 상하좌우로 1씩 이동
// 1, 4, 7 -> L
// 3, 6, 9 -> R
// 2, 5, 8, 0 -> 가까운 손 (왼손잡이->L / 오른손잡이->R)

// 2. 계획

const LeftNumbers = [1, 4, 7];
const RightNumbers = [3, 6, 9];
const Keypad = {
  1: [1, 1], 2: [1, 2], 3: [1, 3],
  4: [2, 1], 5: [2, 2], 6: [2, 3],
  7: [3, 1], 8: [3, 2], 9: [3, 3],
  '*': [4, 1], 0: [4, 2], '#': [4, 3],
};

function calculateDistance(currentLocation, compareLocation) {
  return Math.abs(currentLocation[0] - compareLocation[0]) + Math.abs(currentLocation[1] - compareLocation[1]);
}

function solution(numbers, hand) {
  let leftHand = '*';
  let rightHand = '#';

  return numbers.map(number => {
    if (LeftNumbers.includes(number)) {
      leftHand = number;
      return 'L';
    }
    if (RightNumbers.includes(number)){
      rightHand = number;
      return 'R';
    }
    const leftDistance = calculateDistance(Keypad[number], Keypad[leftHand]);
    const rightDistance = calculateDistance(Keypad[number], Keypad[rightHand]);

    if (leftDistance === rightDistance) {
      if (hand === 'right') {
        rightHand = number;
        return 'R';
      }
      leftHand = number;
      return 'L';
    }
    if (leftDistance > rightDistance) {
      rightHand = number;
      return 'R';
    }
    leftHand = number;
    return 'L';
  }).join('');
}

test('키패드 누르기', () => {
  const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
  const hand = "right";
  expect(solution(numbers, hand)).toBe("LRLLLRLLRRL");
});
