function removeDuplicateWords(s) {
  //   let words = [];
  //   s.split(" ").forEach(function(word) {
  //     if (!words.includes(word)) {
  //       words.push(word);
  //     }
  //   });
  //   return words.join(" ");
  return Array.from(new Set(s.split(" "))).join(" ");
}
console.log(removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
));
