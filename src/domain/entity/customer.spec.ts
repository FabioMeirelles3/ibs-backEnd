import { Customer } from './customer'

describe('Customer tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Customer(
        '',
        'Test Name1',
        'Test Gender',
        '2021-01-01',
        'Test MaritialStatus',
      )
    }).toThrow('Id is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new Customer(
        'TestId1',
        '',
        'Test Gender',
        '2021-01-01',
        'Test MaritialStatus',
      )
    }).toThrow('Name is required')
  })

  it('should throw error when gender is empty', () => {
    expect(() => {
      new Customer(
        'TestId1',
        'Test Name1',
        '',
        '2021-01-01',
        'Test MaritialStatus',
      )
    }).toThrow('Gender is required')
  })

  it('should throw error when birthDate is empty', () => {
    expect(() => {
      new Customer(
        'TestId1',
        'Test Name1',
        'Test Gender',
        '',
        'Test MaritialStatus',
      )
    }).toThrow('BirthDate is required')
  })

  it('should throw error when Maritial Status is empty', () => {
    expect(() => {
      new Customer('TestId1', 'Test Name1', 'Test Gender', '2021-01-01', '')
    }).toThrow('Maritial Status is required')
  })

  it('should change name', () => {
    const customer = new Customer(
      'TestId1',
      'Test Name1',
      'Test Gender',
      '2021-01-01',
      'Test MaritialStatus',
    )

    customer.changeName('Test Name2')
    expect(customer.name).toBe('Test Name2')
  })

  it('should activate customer', () => {
    const customer = new Customer(
      'TestId1',
      'Test Name1',
      'Test Gender',
      '2021-01-01',
      'Test MaritialStatus',
    )

    customer.activate()

    expect(customer.isActive()).toBe(true)
  })
})
