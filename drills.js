// 1a. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// find 8

// look for the middle of the array --> returns 12 --> 8 < 12 so will look through lower half.
// 3,5,6,8,11 find middle point again --> returns 6 --> 8 > 6 so will look in upper half
// 8,11 find midpoint --> ?no mid point so returns higher value? --> returns 11 --> 8 < 11 --> so will look lower half --> finds 8
// 8 === value; final output.

// 1b. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// find 16

// look for the middle of the array --> returns 12 --> 16 > 12 so will look through upper half
// 14, 15, 17, 18 - find middle point again --> 15, 17 --> returns 17
// 16 < 17 --> look lower half, cant find value 16 --> return -1

// 3. Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

function deweySearching(dewey, title, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? dewey.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start, end) / 2);
  const item = dewey[index];

  for (let i = 0; i < dewey.length; i++) {
    if (dewey[i] == title) {
      return `Found book: '${title}'`;
    }
  }
  if (item < dewey) {
    return deweySearching(dewey, title, index + 1, end);
  } else if (item > dewey) {
    return deweySearching(dewey, title, start, index - 1);
  }
}
console.log(deweySearching(['be', 'he', 'hi', 'li', 'qe'], 'li'));

// 4. Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

// in order 14 15 19 25 27 35 79 89 90 91
// pre 35 25 15 14 19 27 89 79 91 90
// post 14 19 15 27 25 79 90 91 89 35
