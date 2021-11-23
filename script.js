function checkCombination(arr) {
  const obj = {};

  arr.forEach(el => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });
  console.log(obj);

  for (const el in obj) {
    if (obj[el] > 1) return false;
  }
  return true;
}

////////////////////////// RETURN TRUE
console.log(checkCombination([["JakartaJS"], ["AWSome Day", "Elixir"], ["GoJakarta", "Elixir"]]));

console.log(checkCombination([["JakartaJS"], ["Elixir"], ["AWSome Day"], ["GoJakarta"]]));

console.log(checkCombination(["JakartaJS", "Elixir", "AWSome Day", "GoJakarta"]));

////////////////////////// RETURN FALSE
console.log(checkCombination([["JakartaJS", "Elixir"], ["Elixir"], ["JakartaJS", "Elixir"]]));

console.log(checkCombination([["JakartaJS"], ["JakartaJS"], ["AWSome Day"], ["GoJakarta"]]));

console.log(checkCombination(["JakartaJS", "JakartaJS", "GoJakarta", "GoJakarta"]));
