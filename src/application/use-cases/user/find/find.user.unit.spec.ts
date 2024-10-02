import FindUserUseCase from './find.user.usecase'
import { User } from '../../../../domain/entity/user'

const user = new User('TestId', 'Test Name', 'test@test.com', 'test')

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(user)),
    delete: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
  }
}

describe('Unit test FindUserUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindUserUseCase(repository)
  it('should return user data', async () => {
    const input = { id: 'TestId' }

    const output = {
      id: 'TestId',
      name: 'Test Name',
      email: 'test@test.com',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a user', async () => {
    const repository = MockRepository()
    repository.find.mockImplementation(() => {
      throw new Error('User not found')
    })
    const usecase = new FindUserUseCase(repository)

    const input = {
      id: 'TesteId2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('User not found')
  })
})
