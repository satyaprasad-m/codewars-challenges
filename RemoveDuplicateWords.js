function removeDuplicateWords(s) {
  let words = [];
  s.split(" ").forEach(function(word) {
    if (!words.includes(word)) {
      words.push(word);
    }
  });
  return words.join(" ");
}
removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);
