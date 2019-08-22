function strEnds(str, end) {
  return str.endsWith(end);
}

console.log(strEnds("abcde", "de"));
console.log(strEnds("abcde", "edf"));
