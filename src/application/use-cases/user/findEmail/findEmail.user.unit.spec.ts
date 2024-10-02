import { User } from '../../../../domain/entity/user'
import FindEmailUserUseCase from './findEmail.user.usecase'

const user = new User('TestId', 'Test Name', 'test@test.com', 'test')

const MockRepository = () => {
  return {
    find: jest.fn(),
    delete: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn().mockReturnValue(Promise.resolve(user)),
  }
}

describe('Unit test FindEmailUserUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindEmailUserUseCase(repository)
  it('should return user', async () => {
    const input = { email: 'test@test.com' }

    const output = {
      id: 'TestId',
      name: 'Test Name',
      email: 'test@test.com',
      password: 'test',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a user', async () => {
    const repository = MockRepository()
    repository.findByEmail.mockImplementation(() => {
      throw new Error('User not found')
    })
    const usecase = new FindEmailUserUseCase(repository)

    const input = {
      email: 'test2@test.com',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('User not found')
  })
})
