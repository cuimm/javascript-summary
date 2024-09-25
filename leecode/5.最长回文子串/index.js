/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let palindrome = "";

  function traverse(left, right) {
    // 通过双指针，在当前回文字符串基础上不断扩大搜索范围
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const currentLength = right - 1 - (left + 1) + 1;
    if (currentLength > palindrome.length) {
      palindrome = s.slice(left + 1, right);
    }
  }

  for (let i = 0; i < s.length; i++) {
    traverse(i, i); // 奇数回文
    traverse(i, i + 1); // 偶数回文
  }

  return palindrome;
};

function isPalindrome(str) {
  const middleIndex = parseInt(str.length / 2); // abc 1 abcd 2
  for (let i = 0; i < middleIndex; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
/**
 * 暴力解法 性能消耗太高
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
  let maxLength = 0;
  let palindrome = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const str = s.slice(i, j + 1);
      if (isPalindrome(str)) {
        maxLength = Math.max(maxLength, str.length);
        if (str.length >= maxLength) {
          palindrome = str;
        }
      }
    }
  }
  return palindrome;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(
  longestPalindrome(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
