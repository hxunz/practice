/**
* ## 이해
*
* 미지의 것: 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return
* 자료
*   - 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
    - 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
    - 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
    - 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
* 조건
*   -
*
* ## 계획
*   - 장르별 총 노래 재생 시간을 구한다.
    - 장르 내에서 재생된 노래와 그 고유번호를 구한다.
    - 총 노래 재생 시간을 내림차순으로 정렬한다.
    - 장르 내에서 재생된 노래 시간을 내림차순으로 정렬한다.
    - 장르 내에서 재생된 노래를 두개씩 자른다.
    - 장르별 총 노래 재생 시간이 많은 순서대로 배열에 담아서 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (genres, plays) => {
  let genresPlay = {}
  genres.forEach((genre, index) => {
    if (!genresPlay[genre]) {
      genresPlay[genre] = {
        total: 0,
        play: []
      }
    }
    genresPlay[genre].total += plays[index];
    genresPlay[genre].play.push([index, plays[index]]);
  })

  const sortedPlays = Object.entries(genresPlay).sort(([, a], [, b]) => b.total - a.total);
  const result = [];

  sortedPlays.forEach(([, it]) => {
    it.play.sort((a, b) => b[1] - a[1]);
  });

  sortedPlays.forEach(([, { play }]) => {
    result.push(...play.slice(0, 2).map(([it]) => it));
  });

  return result;
};

test('solution', () => {
  expect(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])).toEqual([4, 1, 3, 0]
  )
});
