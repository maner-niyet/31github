function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let total = 0;
  const len = queries.length;
  for (let i = 0; i < len; i++) {
    let queriesLeft = len - i - 1; 
    total += queries[i] * queriesLeft;
  }
  return total;
}

// Greedy Algorithm
// TC: O(nlogn) where n is queries.length
// SC: O(1)