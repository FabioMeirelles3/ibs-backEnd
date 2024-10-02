import Address from './address'

describe('Customer tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Address(
        '',
        '12345-678',
        'Street Test',
        123,
        'district test',
        'state test',
        'city test',
        'customer1',
      )
    }).toThrow('Id is required')
  })

  it('should throw error when zip code is empty', () => {
    expect(() => {
      new Address(
        '123',
        '',
        'Street Test',
        123,
        'district test',
        'state test',
        'city test',
        'customer1',
      )
    }).toThrow('Zip Code is required')
  })

  it('should throw error when street is empty', () => {
    expect(() => {
      new Address(
        '123',
        '12345-678',
        '',
        123,
        'district test',
        'state test',
        'city test',
        'customer1',
      )
    }).toThrow('Street is required')
  })
  it('should throw error when number is undefined', () => {
    expect(() => {
      new Address(
        '123',
        '12345-678',
        'Street Test',
        null,
        'district test',
        'state test',
        'city test',
        'customer1',
      )
    }).toThrow('Number is required')
  })
  it('should throw error when district is empty', () => {
    expect(() => {
      new Address(
        '123',
        '12345-678',
        'Street Test',
        123,
        '',
        'state test',
        'city test',
        'customer1',
      )
    }).toThrow('District is required')
  })
  it('should throw error when state is empty', () => {
    expect(() => {
      new Address(
        '123',
        '12345-678',
        'Street Test',
        123,
        'district test',
        '',
        'city test',
        'customer1',
      )
    }).toThrow('State is required')
  })
  it('should throw error when city is empty', () => {
    expect(() => {
      new Address(
        '123',
        '12345-678',
        'Street Test',
        123,
        'district test',
        'state test',
        '',
        'customer1',
      )
    }).toThrow('City is required')
  })
  it('should throw error when customer is empty', () => {
    expect(() => {
      new Address(
        '123',
        '12345-678',
        'Street Test',
        123,
        'district test',
        'state test',
        'city test',
        '',
      )
    }).toThrow('CustomerId is required')
  })
})
