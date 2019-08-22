function stringTransformer(str) {
  let reversedWords = str
    .split(" ")
    .reverse()
    .toString();
  let result = [];
  for (let i = 0; i < reversedWords.length; i++) {
    if (reversedWords.charAt(i) === reversedWords.charAt(i).toUpperCase()) {
      result.push(reversedWords.charAt(i).toLowerCase());
    } else {
      result.push(reversedWords.charAt(i).toUpperCase());
    }
  }

  return result.join("").replace(/,/g, " ");
}
console.log(stringTransformer("ExAmple string"));
