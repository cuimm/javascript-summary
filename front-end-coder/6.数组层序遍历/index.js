const data = [
  {
    id: "1",
    sub: [
      {
        id: "2",
        sub: [
          {
            id: "3",
            sub: null,
          },
          {
            id: "4",
            sub: [
              {
                id: "6",
                sub: null,
              },
            ],
          },
          {
            id: "5",
            sub: null,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    sub: [
      {
        id: "8",
        sub: [
          {
            id: "9",
            sub: null,
          },
        ],
      },
    ],
  },
  {
    id: "10",
    sub: null,
  },
];

function levelOrder(data) {
  const result = [];
  const stack = data;

  while (stack.length) {
    const currentLevelLength = stack.length;
    for (let i = 0; i < currentLevelLength; i++) {
      const { id, sub } = stack.shift();
      result.push(id);
      if (sub && sub.length) {
        stack.push(...sub);
      }
    }
  }

  return result;
}

console.log(levelOrder(data)); // [ '1', '7', '10', '2', '8', '3', '4', '5', '9', '6' ]
