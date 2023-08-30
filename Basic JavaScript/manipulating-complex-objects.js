// ❓ DESCRIPTION:
// Add a new album to the myMusic array.
// Add artist and title strings,
// release_year number, and a formats array of strings.

// ✅ SOLUTION:
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
myMusic.push(
  {
    "artist": "kurt",
    "title": "banch",
    "release_year": 1993,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
  }
)
console.log(myMusic)