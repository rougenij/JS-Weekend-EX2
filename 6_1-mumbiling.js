function mumbling(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str[i].repeat(i + 1).toLowerCase();
  }
  for (let j = 0; j < str.length; j++) {
    arr[j][1].toUpperCase();
  }
  return arr.join("-");
}

console.log(mumbling("RoUgE"));
