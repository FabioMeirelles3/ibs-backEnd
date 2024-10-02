import { User } from './user'

describe('User tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new User('', 'Test', 'test@test.com', '12345678')
    }).toThrow('Id is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      new User('test', '', 'test@test.com', '12345678')
    }).toThrow('Name is required')
  })

  it('should throw error when email is empty', () => {
    expect(() => {
      new User('test', 'Test', '', '12345678')
    }).toThrow('Email is required')
  })

  it('should throw error when password is empty', () => {
    expect(() => {
      new User('test', 'Test', 'test@test.com', '')
    }).toThrow('Password is required')
  })

  it('should change name', () => {
    const user = new User('test', 'Test', 'test@test.com', '12345678')

    user.changeName('Test2')
    expect(user.name).toBe('Test2')
  })

  it('should activate user', () => {
    const user = new User('test', 'Test', 'test@test.com', '12345678')

    user.activate()

    expect(user.isActive()).toBe(true)
  })
})
