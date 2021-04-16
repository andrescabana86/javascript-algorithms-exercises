/*
Define an encoding format that can represent a JSON data structure as an array of single-line strings. Each JSON value primitive (e.g. number, string, boolean, null) should correspond to its own string entry in the output array. Other than those requirements, your encoding scheme can be anything you want.

Create an `encode` function that takes JSON data input and outputs an array of strings in your encoding format.

Create a `decode` function that takes the string array and transforms it back into the original JSON data structure.
*/

const example = {
  squadName: 'Super hero squad',
  homeTown: 'Metro City',
  formed: 2016,
  secretBase: 'Super tower',
  active: true,
  members: [
    {
      name: 'Molecule Man',
      age: 29,
      secretIdentity: 'Dan Jukes',
      powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
    },
    {
      name: 'Madame Uppercut',
      age: 39,
      secretIdentity: 'Jane Wilson',
      powers: ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'],
    },
    {
      name: 'Eternal Flame',
      age: 1000000,
      secretIdentity: 'Unknown',
      powers: ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel'],
    },
  ],
}

// Sample input:
const sampleJson = {
  car: {
    color: 'blue',
    year: 1999,
    broken: ['left mirror', 'right door'],
  },
}

// Sample output string array (remember this encoding is arbitrary and is up to you!):
const encodedSample = ['car/color="blue"', 'car/year=1999', 'car/broken[0]="left mirror"', 'car/broken[1]="right door"']

// Helper function to determine the leaf node type of a JSON value.
//   nodeType({})    // 'object'
//   nodeType([])    // 'array'
//   nodeType(null)  // 'primitive'
//   nodeType('str') // 'primitive'
//   nodeType(123)   // 'primitive'
//   nodeType(true)  // 'primitive'
function getNodeType(value) {
  if (value === null) return 'primitive'
  if (Array.isArray(value)) return 'array'
  if (typeof value === 'object') return 'object'
  else return 'primitive'
}
