// https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

//1. 이해
// 신고한 사람이 정지 되면 신고자는 정지되었다는 이메일을 받는다
// 정지되는 기준은 k번 이상 신고 당했을 경우 (같은 사람을 여러번 신고하는건 한번 신고로 친다)

//2. 계획
// 새로운 Set객체를 만든다.
// 누가 신고했는지 넣으려고 새로운 객체를 만든다.
// 특정 캐릭터를 누가 신고했는지에 대한걸 만든다. reportUsers에다가 넣는거임 
// 배열을 만든다 id_list 길이 만큼의 배열인데 일단 처음에는 0임
// reportUsers에서 k번 이상 신고된 애들거르고 걔네 신고한 애들한테 
// mailCount에다가 1씩 더해준다.

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