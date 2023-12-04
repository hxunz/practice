const solution = (paths) => {
  // const arr = paths.map((it) => {
  //   if (it === '..') {
  //     arr.pop()
  //   } else if (it === '...') {
  //     arr.slice(arr.length -3)
  //   } else {
  //     arr.push(it)
  //   }
  // })

  const arr = [];
  for (let i = 0; i < paths.length; i++) {
    console.log('paths[i]::: ', paths[i]);
    if (paths[i] === '..') {
      arr.pop()
    } else if (paths[i] === '...') {
      arr.slice(0, arr.length - 2)
    } else {
      arr.push(paths[i])
    }
  }
  console.log('arr::: ', arr);
  const path = arr.join('/').replace(/\ ./g, '').replace(/\/+/g, '/');
  console.log('path::: ', path);
  // return path;
};

test('solution', () => {
  // expect(solution(['/foo', 'bar', 'baz/asdf', 'quux', '..'])).toEqual('/foo/bar/baz/asdf');
  // expect(solution(['/foo', 'bar', 'baz/asdf'])).toEqual('/foo/bar/baz/asdf');
  // expect(solution(['/foo', 'bar', 'baz/ ./asdf'])).toEqual('/foo/bar/baz/asdf');
  expect(solution(['/foo', 'bar', '/baz', '...', 'ab/'])).toEqual('/foo/ab');
  // expect(solution(["/foo", ".."])).toEqual('/');
  // expect(solution(["/foo", "..", "..", "ab"])).toEqual('/ab');
});
