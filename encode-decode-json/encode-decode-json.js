export function encode(json, prefix) {
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

export function decode(paths, position) {
  if (position && typeof paths === 'string') {
    // create {} object
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

    // create [] array
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

    // create [...{}] object array
    const objArray = paths.search(/(?:])+(\/)/)
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

    // create { key: value } pair
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

  // first iteration over the [...values]
  return paths.reduce((partial, path) => {
    decode(path, partial)
    return partial
  }, {})
}

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
