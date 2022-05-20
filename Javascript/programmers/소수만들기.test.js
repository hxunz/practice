//1.이해
// 주어진 숫자 중 3개의 수를 더해라
// 소수가 되는 경우의 개수를 구해라

//2.계획
// 소수는 1과 자기자신만으로 나누어떨어진다.
// 모든 배수를 제거하고 남은 수가 소수다.
// n까지의 배수를 구하려면 n의 제곱근 이하의 수의
// 모든 배수를 제거하면 된다.

// 2-1. 배열 내 소수 찾고 소수 몇갠지  1은 소수가 아니다
// 2-2. nums에 있는 3개의 숫자 더하는 함수를 만든다.
// 2-3. 위에서 나온 수들을 빈 배열 안에 담는다.
// 2-4. 소수 만드는 함수를 사용해서 소수를 찾아서 빈 배열에 담는다.
// 2-5. 이 배열의 길이를 구한다.

function solution(nums) {
  // let number = [];

  // for (i = 0; i < nums.length; i++) {
  //   for (j = i+1; j < nums.length; j++) {
  //     for (k = j+1; k < nums.length; k++) {
  //       number = nums[i] + nums[j] + nums[k];
  //     }
  //   }
  // }
};

const findPrime = (arrNumber) => {
  //배열을 돌면서 자기 자신과 나눴을때 몫이 1인경우
  // let result = [];

  // for (i = 1; i < arrNumber.length; i++) {
  //   if (Number.isInteger(Math.sqrt(arrNumber[i])) === false) {
  //     result += arrNumber[i];
  //   }
  // }

  // return result.length;
  return arrNumber.filter(x => Number.isInteger(Math.sqrt(x)) === false).length;
}

test('소수찾기', () => {
  expect(findPrime([1,2,3,4,5])).toBe(3);
})

// test('primeNumber', () => {
//   expect(solution([1, 2, 3, 4])).toBe(1);
// })
