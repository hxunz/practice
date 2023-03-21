/**
* ## 이해
*
* 미지의 것: 파일명 정렬 프로그램을 구현하라.
* 자료
*   - 소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다.
    - 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
    - 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.
    - HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
    - NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
    - TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.
* 조건
*   -
*
* ## 계획
*   - 파일이름에서 HEAD, NUMBER, TAIL을 구한다.
    - 정렬한다.
    - 다시 합쳐서 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const sorted = (convertFiles) => {
  return convertFiles.sort((a, b) => {
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return 1
    }
    if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1
    }

    if (Number(a[1]) > Number(b[1])) {
      return 1
    }
    if (Number(a[1]) < Number(b[1])) {
      return -1
    }
    return 0
  })
}

const convert = (file) => {
  const head = file.match(/^[a-zA-Z]+/)[0];
  const number = file.match(/\d+/)[0];
  const tail = file.slice(head.length + number.length);

  return [head, number, tail];
}

const solution = (files) => {
  const convertFiles = files.map((file) => convert(file));
  const sortedFiles = sorted(convertFiles);
  return sortedFiles.map((file) => file.join(''));
};

test('sorted', () => {
  expect(sorted([
    ['img', '12', '.png'],
    ['img', '10', '.png']
  ])).toEqual([
    ['img', '10', '.png'],
    ['img', '12', '.png']
  ]);
  expect(sorted([
    ['img', '1', '.png'],
    ['IMG', '01', '.GIF']
  ])).toEqual([
    ['img', '1', '.png'],
    ['IMG', '01', '.GIF']
  ]);
})

test('convert', () => {
  expect(convert("img12.png")).toEqual(['img', '12', '.png']);
  expect(convert("foo010bar020.zip")).toEqual(['foo', '010', 'bar020.zip']);
})

test('solution', () => {
  expect(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])).toEqual(["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"])
})
