// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// - 스파이가 옷을 겹치지 않게 몇번 조합해서 입을 수 있는지를 구해라.

// 주어진 자료는 무엇인가?
// - 스파이의 의상이 담긴 2차원 배열 clothes

// 조건은 무엇인가?
// - 다음날 입을 옷이 겹치면 안된다.
// - 옷을 입을 때 의상 종류가 겹치면 안된다.
// - 최소 옷 하나는 입어야댐,,

// 우리가 문제를 풀기 위해 주어진 자료가 충분한가?
// 숨겨진 조건이나 자료가 있는가? 그렇다면 그 것을 다른 방법으로 해석해보라.
// - 같은 이름을 가진 옷은 없다.
// - 배열 내 배열의 길이는 무조건 2
// -  인덱스0은 의상이름, 인덱스1은 의상종류

// 2. 계획
// 전에 비슷한 문제를 알고 있는가?
// - 경우의 수를 구하고 배열 내 요소를 하나씩 비교하는것이,, 소수만들기 했을떄와 비슷한듯,,,?

// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// - 2차원 배열을 어떻게 다룰 수 있는지 알아야할듯

// 의상종류에 따른 객체를 만든다.
// value가 배열이니까 반복문 돌면서 경우의 수 만들어보면 될듯..?
// ㄴ객체에 접근 

// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?

const solution = (clothes) => {
    //2차원 배열을 의상종류를 기준으로해서 객체로 나타내자
    const objClothes = clothes.reduce((prev, row) => {
        const [clothe, kind] = row;
        prev[kind] = [...(prev[kind] || []), clothe];
        return prev;
    }, {});
    
    //객체 키가 하나일때는 그냥 바로 value 길이를 리턴
    if (Object.keys(objClothes).length === 1) {
        return Object.values(objClothes)[0].length;
    }

    //(a+1)(b+1)(c+1)
    //abc + ab + bc+ ac + a+ b+ c+1
    const result = Object.values(objClothes).reduce((acc, curr) => (curr.length+1)*acc, 1);
    
    return result - 1;
}



test('옷입히기', () => {
    expect(solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]])).toBe(3);
    expect(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])).toBe(5);
})