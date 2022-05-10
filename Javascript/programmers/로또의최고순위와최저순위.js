// 1.이해
// 0은 알아볼 수 없는 숫자
// 로또가 당첨될 수 있는 최고 순위랑 최저 순위 배열로 리턴

// 2. 계획
// const num = lottos에서 0이 아닌 수를 골라냄 filter() oo
// num에서 win_nums에 해당하는 숫자가 있는지 찾음 includes() oo
// => 몇개가 일치하는지 찾음 oo
// lottos에서 0이 몇개 있는지 찾아 oo 
// 위에서 num이랑 win_nums랑 일치했던 수를 제외하고 win_nums에 있는 숫자 전부 일치 => 최고 순위
// 위에서 num이랑 win_nums랑 일치했던 수를 제외하고 win_nums에 있는 숫자 전부 일치 => 최저 순위

function solution(lottos, win_nums) {
    const num = lottos.filter(n => n !== 0);
    const intersection = win_nums.filter(n => num.includes(n));
    const zero = lottos.filter(n => n == 0);
    const first = intersection.length;
    const second = intersection.length + zero.length;
    let result = [];
    
    if(second == 6) {
        result += 1
    } else if(second == 5) {
        result += 2
    } else if(second == 4) {
        result += 3
    } else if(second == 3) {
        result += 4
    } else if(second == 2) {
        result += 5
    } else if(second == 1) {
        result += 6
    }
    
    if(first == 6) {
        result += 1
    } else if(first == 5) {
        result += 2
    } else if(first == 4) {
        result += 3
    } else if(first == 3) {
        result += 4
    } else if(first == 2) {
        result += 5
    } else if(first == 1) {
        result += 6
    }
    
    if(first == 0 && second == 0) {
        return [6, 6];
    } else if (first == 0 && second == 6) {
        return [1, 6];
    } else if (first == 6 && second == 6) {
        return [1, 1];
    } else {
        return result.split('').map(Number);
    }
}