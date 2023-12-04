const readlineSync = require('readline-sync');

const duration = readlineSync.questionInt('타이머를 설정하세요 (초): ');

const timer = (duration) => {
  const interval = setInterval(() => {
    if (duration === 0) {
      clearInterval(interval);
      console.log('타이머가 종료되었습니다.');
    } else {
      console.log(`남은 시간: ${duration}초`);
      duration--;
    }
  }, 1000);
}

timer(duration);
