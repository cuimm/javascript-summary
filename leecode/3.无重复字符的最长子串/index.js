/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char] !== undefined) {
      left = Math.max(left, map[char] + 1);
    }
    maxLength = Math.max(maxLength, i - left + 1);
    map[char] = i;
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("aa")); // 1
console.log(lengthOfLongestSubstring("aabcd")); // 4
console.log(lengthOfLongestSubstring("abba")); // 2
console.log(lengthOfLongestSubstring("abcaacba")); // 3
console.log(lengthOfLongestSubstring("abcddacba")); // 4
