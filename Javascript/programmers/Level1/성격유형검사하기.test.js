const solution = (survey, choices) => {
  let category = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0,
  };

  for (i = 0; i < survey.length; i++) {
    const left = survey[i][0];
    const right = survey[i][1];

    if (choices[i] === 1) {
      category[left] = category[left] + 3
    } else if (choices[i] === 2) {
      category[left] = category[left] + 2
    } else if (choices[i] === 3) {
      category[left] = category[left] + 1
    } else if (choices[i] === 5) {
      category[right] = category[right] + 1
    } else if (choices[i] === 6) {
      category[right] = category[right] + 2
    } else if (choices[i] === 7) {
      category[right] = category[right] + 3
    }
  }


  let result = [];

  if (category['R'] > category['T'] === true) {
    result.push('R')
  } else if (category['R'] === category['T']) {
    result.push('R')
  } else {
    result.push('T')
  }

  if (category['C'] > category['F'] === true) {
    result.push('C')
  } else if (category['C'] === category['F']) {
    result.push('C')
  } else {
    result.push('F')
  }

  if (category['J'] > category['M'] === true) {
    result.push('J')
  } else if (category['J'] === category['M']) {
    result.push('J')
  } else {
    result.push('M')
  }

  if (category['A'] > category['N'] === true) {
    result.push('A')
  } else if (category['A'] === category['N']) {
    result.push('A')
  } else {
    result.push('N')
  }

  return result.join('');
}

// for (i = 0; i < Object.keys(category).length; i++) {

// }
// const user = {
//   name: 'yunseok',
//   age: 32,
//   address: 'hanam',
//   money: 10000,
//   house: '아파트',
// }

// const name = user.name;
// const age = user.age;
// const address = user.address;
// const money = user.money;
// const house = user.house;

// <VideoPlay element={'string'} />

// function VideoPlay({ element }) {
//   return (
//     <div>
//       element={element}
//     </div>
//   )
// }



test('surveyResult', () => {
  expect(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])).toEqual("TCMA");
});
