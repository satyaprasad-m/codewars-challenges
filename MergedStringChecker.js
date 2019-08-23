function isMerge(s, part1, part2) {
  let results = new Set();
  if (s.length !== part1.length + part2.length) {
    return false;
  } else {
    Array.from(part1)
      .concat(Array.from(part2))
      .forEach(function(element) {
        results.add(Array.from(s).includes(element));
      });
  }
  return Array.from(results).length === 2 ? false : true;
}

console.log(isMerge("codewars", "code", "wars"));
console.log(isMerge("codewars", "cdw", "oears"));
console.log(isMerge("codewars", "cod", "wars"));
