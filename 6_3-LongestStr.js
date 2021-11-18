function longest(s1, s2) {
  let a = [...new Set(s1.split(""))];
  let b = [...new Set(s2.split(""))];
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  let joinedArr = [...new Set(a)];
  let joined = joinedArr.sort().join("");
  return joined;
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// The Set object lets you store unique values of any type, whether primitive values or object references.
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
