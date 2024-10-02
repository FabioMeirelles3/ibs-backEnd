import { User } from '../../../../domain/entity/user'
import DeleteUserUseCase from './delete.user.usecase'

const user = new User('TestId', 'Test Name', 'test@test.com', 'test')

const MockRepository = () => {
  return {
    find: jest.fn(),
    delete: jest.fn().mockReturnValue(Promise.resolve(user)),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
  }
}

describe('Unit test DeleteUserUseCase', () => {
  const repository = MockRepository()
  const usecase = new DeleteUserUseCase(repository)
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

  it('should not delete a user', async () => {
    const repository = MockRepository()
    repository.delete.mockImplementation(() => {
      throw new Error('User not found')
    })
    const usecase = new DeleteUserUseCase(repository)

    const input = {
      id: 'TesteId2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('User not found')
  })
})
