// 1. 이해

// 신규 아이디 생성 시 아이디 추천
// 아이디 길이가 3자 이상 15자 이하
// 알파벳 소문자, 숫자, -, _, . 사용 가능
// 처음과 끝에 . 안됨
// . 연속 사용 안됨

// 2. 계획

// 정규 표현식 사용해보자
// 대문자를 소문자로 바꾸기
// 알파벳 소문자, 숫자, -, _, . 을 제외한 문자 지우기
// .연속 사용 된거 . 하나로 바꾸기
// .가 처음이나 끝에 있으면 제거
// 빈문자열인 경우 a로 대체
// 길이가 3자 이상 15자 이하
// 길이가 2자 이하인 경우 마지막 문자열 추가

// 3. 실행

// 4. 회고

function solution(new_id) {
    let result = new_id
            .toLowerCase()
            .replace(/[^\w\-_.]/g, '')
            .replace(/\.{2,}/g, '.')
            .replace(/^\.|\.$/g, '');
    if (result.length >= 16) {
        result = result.slice(0, 15).replace(/\.$/, '');
    }
    if (result === '') {
        return 'aaa';
    }
    if (result.length <= 2) {
        return result + result[result.length -1].repeat(3 - result.length)
    }
    
    return result;
}
