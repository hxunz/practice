// https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(id_list, report, k) {
  const realReport = new Set(report);

  const reportUsers = new Map(id_list.map(id => ([
    id, []
  ])));

  realReport.forEach(data => {
    const [realUser, reportedUser] = data.split(' ');
    reportUsers.set(reportedUser, [...reportUsers.get(reportedUser), reportUser])
  })

  const mailCounts = new Array(id_list.length).fill(0);
  reportUsers.forEach((value) => {
    if (value.length >= k) {
      value.forEach(name => {
        const index = id_list.findIndex(id => id === name);
        mailCounts[index] += 1;
      })
    }
  });

  return mailCounts;
}

module.exports = solution;