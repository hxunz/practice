// https://programmers.co.kr/learn/courses/30/lessons/64061

//1. 이해
// NxN 크기의 1x1 크기로 격자가 있는 정사각 게임 화면
// 격자의 가장 아래칸부터 채워져있음
// 바구니의 가장 아래부터 뽑은 인형이 쌓임
// 바구니에 같은 인형이 연속되면 터져서 없어짐
// 인형이 없는 곳에서 크레인을 작동시키면 아무런 일도 없다
// board = 격자
// moves 어디서 인형 뽑는지

// 2.계획
// 배열 moves를 for문을 사용해서 돌린다
// moves[0]을 찾아
// -> board[0][0]이 0이라면 그다음 board[0][1]로 가고 0이 아닌 숫자가 나올때까지 반복
// 0이 아닌 숫자가 나왓다?
// 그럼 이걸 push해서 빈 배열에 넣어줘.
// 이때, 빈배열에 숫자를 넣어주다 이번에 push 하려는 숫자가 배열의 마지막 요소랑 같다면 pop해준다

// 3.실행

function solution(board, moves) {
  let basket = [];
  let result = 0;

  for (i = 0; i < moves.length; i++) {
    for (j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (basket[basket.length - 1] === board[j][moves[i] - 1]) { 
          result += 2;
          basket.pop();
        } else {
          basket.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i]-1] = 0;
        break;
      }
    }
  }
  return result;
}