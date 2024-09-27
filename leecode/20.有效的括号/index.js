/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s || s.length % 2 !== 0) {
    return false;
  }
  let result = true;
  const stack = [];
  const mapping = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const chars = s.split("");
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const target = mapping[char];
    if (target) {
      stack.unshift(target);
    } else {
      const targetChar = stack.shift();
      if (char !== targetChar) {
        result = false;
        break;
      }
    }
  }
  return result && !stack.length;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("([)]")); // false
console.log(isValid("((")); // false
