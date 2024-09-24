function findPath(data, targetId) {
  let result = [];

  function traverse(data, targetId, path = []) {
    if (!data) return;

    for (let i = 0; i < data.length; i++) {
      const { id, sub } = data[i];
      if (id === targetId) {
        result = path.concat(id);
        return;
      }
      traverse(sub, targetId, path.concat(id));
    }
  }

  traverse(data, targetId);

  return result;
}

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

console.log(findPath(data, "1")); // ['1']
console.log(findPath(data, "9")); // [ '7', '8', '9' ]
console.log(findPath(data, "100")); // []
