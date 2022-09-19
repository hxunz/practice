const solution = (fees, records) => {
  //   각 차량의 누적 시간을 구한다. 
  // 1 - 1 Out에서 In 시간을 뺀다.
  // 1 - 2 출차 기록이 없다면 out을 23: 59라고 설정

  // 각 차량의 주차 요금을 구한다.
  // 2 - 1 5000 + Math.ceil((누적시간 - 1 80) / 10) * 600
  //   2 - 2 누적 시간이 180을 넘지 않는다면 주차요금은 5000원
  // 차량 번호가 작은 순으로 주차요금을 배열에 담아서 리턴한다.

  const numbers = records.map((it) => it.split(' ')).map((num) => num[1]);
  const set = new Set(numbers);
  const carNumber = [...set].sort((a, b) => a - b);
  const totalParkingTime = Array.from({ length: carNumber.length }, (v, i) => 0);
  const parkingTime = records.map((it) => it.split(' ')).map((time) => [...time[0].split(':'), time[1], time[2]]);

  for (i = 0; i < carNumber.length; i++) {
    let count = 0;
    for (j = 0; j < parkingTime.length; j++) {
      if (carNumber[i] === parkingTime[j][2]) {
        count += 1;
        if (parkingTime[j][3] === 'IN') {
          totalParkingTime[i] -= (Number(parkingTime[j][0]) * 60) + Number(parkingTime[j][1])
        } else if (parkingTime[j][3] === 'OUT') {
          totalParkingTime[i] += (Number(parkingTime[j][0] * 60)) + Number(parkingTime[j][1])
        }
      }
    }
    if (count % 2 === 1) {
      totalParkingTime[i] += 1439
    }
  };

  const result = totalParkingTime.map((it) => {
    if (it > fees[0]) {
      return fees[1] + Math.ceil((it - fees[0]) / fees[2]) * fees[3]
    } else {
      return fees[1]
    }
  });

  return result;
};


test('parkingFee', () => {
  expect(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])).toEqual([14600, 34400, 5000]);
  expect(solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"])).toEqual([0, 591]);
});
