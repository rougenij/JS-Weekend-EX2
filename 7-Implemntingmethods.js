const players = [
  {
    id: 70111470,
    name: "Baba_Smurf",
    rating: [4.0],
  },
  {
    id: 654356453,
    name: "JoeGG",
    rating: [5.0],
  },
  {
    id: 65432445,
    name: "mokeboyy",
    rating: [4.0],
  },
  {
    id: 675465,
    name: "cm_zon",
    rating: [5.0],
  },
];

function loopOverArrayForEach(arr) {
  const objArr = [];
  arr.ForEach(function (players) {
    objArr.push({ name: players.name, id: players.id });
  });
  return objArr;
}

function loopOverArrayMap(arr) {
  return arr.map(function (players) {
    return { name: players.name, id: players.id };
  });
}
