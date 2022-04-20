function falsyvalues(arr) {
  arr = arr.filter(function (n) {
    return (n !== undefined && n !== null && n !== false && n !== 0 && n !== "" && n != NaN);
  });
  return arr.filter(Boolean);
}

console.log(falsyvalues([7, "ate", "", false, 9, 0, null, NaN, undefined]));