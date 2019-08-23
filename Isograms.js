function isIsogram(str) {
  //return true if length of the str is 0;
  if (str.length == 0) {
    return true;
  }
  // Set to store the array of letters of the string, so that duplicates can be removed.
  let iso = new Set(Array.from(str.toLowerCase()));
  //if the size of the set is same as the str, then return true;
  return iso.size == str.length;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");
