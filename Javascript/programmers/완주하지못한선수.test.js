// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// - 완주하지 못한 선수의 이름을 구하라.

// 주어진 자료는 무엇인가?
// - 마라톤 참여한 선수의 이름이 담긴 배열 participant / 완주한 선수들의 이름이 담기 배열 completion
// - 완주하지 못한 선수는 한 사람이다.

// 조건은 무엇인가?
// - 참가자 중에는 동명이인이 있을 수 있습니다.
// 우리가 문제를 풀기 위해 주어진 자료가 충분한가?
// 숨겨진 조건이나 자료가 있는가? 그렇다면 그 것을 다른 방법으로 해석해보라.

// 2. 계획
// 전에 비슷한 문제를 알고 있는가?
// 로또의 최저순위랑 최고순위구하는거

// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// filter()
// includes()

// 비슷한 문제를 풀어본 적이 있다면 그 것을 활용할 수 있는가?
// 만약 문제를 풀 수 없다면 문제를 더 단순하게 하기 위해서 주어진 조건을 버려보아라
// 주어진 자료로부터 유용한 것을 이끌어 낼 수 있는가?
// 자료는 모두 사용했는가?
// 조건을 모두 사용했는가?
// 문제에 포함된 핵심적인 개념은 모두 고려했는가?

// 참가자 명단에서, 완주한 명단을 뺀다
// 
// 참가자 배열에서 그리고 완주한 명단에서 찾아서 뺀다.
// 참가자 명단에 남은 선수의 이름을 반환한다.

// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
    
const findIncompletion = (participants, completions) => {
    // if (completions.length === 0) {
    //     return participants[0];
    // }

    // const person = completions[0];
    // const index = participants.findIndex((it) => it === person);
    
    // return findIncompletion(
    //     [...participants.slice(0, index), ...participants.slice(index + 1)],
    //     completions.slice(1)
    // )
    let result = participants;

    for (i = 0; i < completions.length; i++) {
        const personIndex = result.findIndex(participant => participant === completions[i]);
        result = [...result.slice(0, personIndex), ...result.slice(personIndex + 1)];
    }
    return result[0];
}

// const hashMap = {

// }
// const findIncompletion = (participants, completions) => {
//     participants.sort();
//     completions.sort();
//     return participants.find((it, index) => it !== completions[index]);
// }

test('findIncompletion', () => {
    expect(findIncompletion(['a'], [])).toBe('a');
    expect(findIncompletion(['c', 'a'], ['c'])).toBe('a');
    expect(findIncompletion(['c', 'a', 'b'], ['b', 'c'])).toBe('a');
    expect(findIncompletion(['c', 'a', 'a'], ['a', 'c'])).toBe('a');
    expect(findIncompletion(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe('leo');
    expect(findIncompletion(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])).toBe('vinko');
});

