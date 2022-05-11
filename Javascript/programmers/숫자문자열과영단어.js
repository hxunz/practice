//1. 이해
// 영단어가 포함된 숫자가 주어진다
// 영단어를 숫자로 변경한다.
// 리턴 값은 숫자여야함

const { fireEvent } = require("@testing-library/react");

//2. 계획
// 전부다 숫자면 그대로 리턴 -> 숫자인지 어케 알지,,?
// 숫자만 제외 -> 숫자인지 어케 알지,,? typeof가 string임 ㅜ 
// 문자열에서 어떻게 one이고 two인지 확인하지,,?

// 객체를 사용했다.
// forEach를 써서 정규표현식 gi사용
// replace
// int로 변경

//3. 실행 

function solution(s) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let answer = s;

  for (i = 0; i < arr.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
