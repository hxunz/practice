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

// 특정 숫자(n)이 소수인지 알기위해선 2부터 n -1 까지 나눴을때 나뉘는지 보면 됨
// 2부터 n의 제곱근을 한 수만큼만 나눠봐도 된다

  
const findPrime = (numbers) => {
  //2부터제곱근까지 나누기
    //나머지가 0이면
    //카운트1
    let primeCount = 0;
  for (i = 0; i < numbers.length; i++) {
    let isNotPrime = false;
      for (j = 2; j <= Math.floor(Math.sqrt(numbers[i])); j++) {
        if (numbers[i] % j === 0) {
          isNotPrime = true;
        } 
      }
    if (isNotPrime === false) {
      primeCount += 1;
    }
    }
    return primeCount;
};

function solution(nums) {
    let numbers = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i+1; j < nums.length; j++) {
      for (k = j+1; k < nums.length; k++) {
        numbers = [...numbers,nums[i] + nums[j] + nums[k]];
      }
    }
  }
  return findPrime(numbers);
};

test('세개의 숫자 더한값 담은 배열에서 소수찾기', () => {
  expect(solution([1, 2, 3, 4])).toBe(1);
  expect(solution([1, 2, 7, 6, 4])).toBe(4);
})
