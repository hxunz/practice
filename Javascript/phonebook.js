const readlineSync = require('readline-sync');

// 전화번호부 객체 생성
const phoneBook = {};

// 전화번호 추가
const addPhoneNumber = (name, phoneNumber) => {
  phoneBook[name] = phoneNumber;
};

// 전화번호 검색
const searchPhoneNumber = (name) => {
  if (name in phoneBook) {
    return phoneBook[name];
  } else {
    return '전화번호를 찾을 수 없습니다.';
  }
};

while (true) {
  console.log('=== 전화번호부 ===');
  console.log('1. 전화번호 추가');
  console.log('2. 전화번호 검색');
  console.log('3. 종료');
  const select = readlineSync.question('메뉴를 선택하세요: ');

  if (select === '1') {
    const name = readlineSync.question('이름을 입력하세요: ');
    const phoneNumber = readlineSync.question('전화번호를 입력하세요: ');
    addPhoneNumber(name, phoneNumber);
    console.log('전화번호가 추가되었습니다.');
  } else if (select === '2') {
    const searchName = readlineSync.question('검색할 이름을 입력하세요: ');
    const result = searchPhoneNumber(searchName);
    console.log(`전화번호: ${result}`);
  } else if (select === '3') {
    console.log('프로그램을 종료합니다.');
    process.exit(0);
  } else {
    console.log('올바른 메뉴를 선택하세요.');
  }
}
