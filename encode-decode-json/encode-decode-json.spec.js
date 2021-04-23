import { encode, decode } from './encode-decode-json'
import {
  objExample,
  objExampleEncoded,
  arrExample,
  arrExampleEncoded,
  arrOfObjExample,
  arrOfObjExampleEncoded,
  objAndArrCombinedExample,
  objAndArrCombinedExampleEncoded,
} from './mock-data'

describe('Encode JSON', () => {
  it('should encode an object example properly', () => {
    const encoded = encode(objExample)
    expect(encoded).toEqual(objExampleEncoded)
  })

  it('should encode an array example properly', () => {
    const encoded = encode(arrExample)
    expect(encoded).toEqual(arrExampleEncoded)
  })

  it('should encode an array of objects example properly', () => {
    const encoded = encode(arrOfObjExample)
    expect(encoded).toEqual(arrOfObjExampleEncoded)
  })

  it('should encode a combination of objects and arrays example properly', () => {
    const encoded = encode(objAndArrCombinedExample)
    expect(encoded).toEqual(objAndArrCombinedExampleEncoded)
  })
})

describe('Decode JSON', () => {
  it('should decode an object example properly', () => {
    const encoded = decode(objExampleEncoded)
    expect(encoded).toEqual(objExample)
  })

  it('should decode an array example properly', () => {
    const encoded = decode(arrExampleEncoded)
    expect(encoded).toEqual(arrExample)
  })

  it('should decode an array of objects example properly', () => {
    const encoded = decode(arrOfObjExampleEncoded)
    expect(encoded).toEqual(arrOfObjExample)
  })

  it('should decode a combination of objects and arrays example properly', () => {
    const encoded = decode(objAndArrCombinedExampleEncoded)
    expect(encoded).toEqual(objAndArrCombinedExample)
  })
})
