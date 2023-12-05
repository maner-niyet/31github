function bestSeat(seats) {
  let bestSeat = -1;
  let maxSpace = 0;
  let left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) {
      right++;
    }
    let currentSpace = right - left - 1;
    if (currentSpace > maxSpace) {
      bestSeat = Math.floor((left + right) / 2);
      maxSpace = currentSpace;
    }
    left = right;
  }
  return bestSeat;
}

// TC: O(n) where n is seats.length;
// SC: O(1);