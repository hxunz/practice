/**
* ## 이해
*
* 미지의 것: 가장 수익이 높은 광고의 ID를 구하라
* 자료
*   - [광고 ID, 시청 단가, 클릭 단가, 타겟 성별]
    - 타겟 성별
    1. 남성 : M
    2. 여성 : F
    - [사용자 활동, 광고 ID, 시청 시간의 비율, 이용 성별]
    - 사용자 활동
    1. 시청 : V
    2. 클릭 : C
    - 이용 성별
    1. 남성 : M
    2. 여성 : F
    - 클릭의 경우 시청 시간의 비율은 비어있다
    - 타겟 성별과 이용 성별이 일치하는 경우 얻는 수익은 2배가 된다.
    - 시청 비율이 50% 미만의 경우 시청 단가의 절반(소수점 버림)의 수익을 얻는다.
    - 계산의 순서는 타겟 성별 일치 여부 > 시청 비율 이다.
* 조건
*   -
*
* ## 계획
*   - 타겟 성별에 따른 광고 수익을 계산한다.
    - 위를 바탕으로 시청 비율에 따른 광고 수익을 계산한다.
    - 그중에서 가장 수익이 높은 광고의 ID를 찾는다.
    - 이를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const getRevenue = (ADInfos, logs) => {
  let revenues = [];

  for (let i = 0; i < ADInfos.length; i++) {
    if (!revenues.includes(ADInfos[i][0])) {
      revenues.push([ADInfos[i][0], 0])
    }
  }

  for (let i = 0; i < ADInfos.length; i++) {
    for (let j = 0; j < logs.length; j++) {
      //해당 광고를 본 사용자를 찾는다.
      if (ADInfos[i][0] === logs[j][1]) {
        //성별이 같은지 확인한다.
        if (ADInfos[i][3] === logs[j][3]) {
          //클릭했는지 확인한다.
          if (logs[j][0] === 'C') {
            let index = 0;
            revenues.forEach((ad, i) => {
              if (ad[0] === ADInfos[i][0]) {
                index = i
              }
            })
            revenues[index][1] += (ADInfos[i][2] * 2)
            index = 0
          } else {
            //시청했는지 확인한다.
            let index = 0;
            revenues.forEach((ad, i) => {
              if (ad[0] === ADInfos[i][0]) {
                index = i
              }
            })
            revenues[index][1] += (ADInfos[i][1] * 2)
            index = 0
          }
        }

        if (ADInfos[i][0] === logs[j][1]) {
          //성별이 다를 경우
          if (ADInfos[i][3] !== logs[j][3]) {
            console.log('ADInfos::: ', ADInfos);
            console.log('logs::: ', logs);
            if (logs[j][0] === 'C') {
              let index = 0;
              revenues.forEach((ad, i) => {
                if (ad[0] === ADInfos[i][0]) {
                  index = i
                }
              })
              revenues[index][1] += (ADInfos[i][2])
              index = 0
            }
            // else {
            //   //시청했는지 확인한다.
            //   let index = 0;
            //   revenues.forEach((ad, i) => {
            //     if (ad[0] === ADInfos[i][0]) {
            //       index = i
            //     }
            //   })
            //   revenues[index][1] += (ADInfos[i][1])
            //   index = 0
            // }
          }

        }
      }
    }
  }

  console.log('revenues::: ', revenues);
}

test('getRevenue', () => {
  expect(getRevenue(
    [["A", "5", "20", "F"], ["B", "3", "5", "M"]],
    [["C", "A", "", "M"], ["V", "B", "30", "M"], ["C", "B", "", "M"]]
  )).toEqual([20, 18])
})

const solution = (ADInfos, logs) => {
  //타겟 성별에 따른 광고 수익 계산
  const adRevenue = getRevenue(ADInfos, logs);
};

test('solution', () => {
  expect(solution(
    [["A", "5", "20", "F"], ["B", "3", "5", "M"]],
    [["C", "A", "", "M"], ["V", "B", "30", "M"], ["C", "B", "", "M"]]
  )).toEqual('A');
});
