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
  capabilities: { kill: false, capture: true, save: true },
  membersCode: [1, 2, 3],
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

const example2 = {
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

function encode(json, prefix) {
  let result = ''
  switch (getNodeType(json)) {
    case 'object':
      Object.keys(json).map((key) => {
        result += encode(json[key], `${prefix ? `${prefix}/` : ''}${key}`)
      })
      break
    case 'array':
      json.map((value, idx) => {
        result += encode(value, `${prefix ? `${prefix}[${idx}]` : ''}`)
      })
      break
    default:
      const value = typeof json === 'string' ? `"${json}"` : json
      result += `${prefix && isNaN(prefix) ? prefix : ''}=${value}`
      result += ','
      break
  }

  if (prefix === undefined) {
    // final result where prefix is undefined
    return result.slice(0, -1).split(',')
  }

  return result
}

function decode(paths, position) {
  if (position && typeof paths === 'string') {
    const divider = paths.search(/(?:\w)(\/)/)
    if (divider > -1) {
      const path = paths.substring(0, paths.indexOf('/'))
      const subpath = paths.substring(paths.indexOf('/') + 1)
      if (!position[path]) {
        position[path] = {}
      }
      decode(subpath, position[path])
      return
    }

    const array = paths.search(/^\w+\[[0-9]]/)
    if (array > -1) {
      const path = paths.substring(0, paths.indexOf('['))
      const subpath = paths.substring(paths.indexOf('['))
      if (!position[path]) {
        position[path] = []
      }
      decode(subpath, position[path])
      return
    }

    const objArray = paths.search(/(?:\])+(\/)/)
    if (objArray > -1) {
      let path = paths.substring(0, paths.indexOf('/'))
      const subpath = paths.substring(paths.indexOf('/') + 1)
      if (path.includes('[')) {
        path = path.replace(/[\[\]]/g, '')
      }
      if (!position[path]) {
        position[path] = {}
      }
      decode(subpath, position[path])
      return
    }

    const value = paths.search(/=/)
    if (value > -1) {
      let [prop, value] = paths.split('=')
      if (prop.includes('[')) {
        prop = prop.replace(/[\[\]]/g, '')
      }
      position[prop] = JSON.parse(value)
      return
    }
  }

  return paths.reduce((partial, path) => {
    decode(path, partial)
    return partial
  }, {})
}

const encoded = encode(example)
console.log('encoded', encoded)
const decoded = decode(encoded)
console.log('decoded', JSON.stringify(decoded, null, 2))
