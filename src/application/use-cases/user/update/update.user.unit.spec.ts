import { User } from '../../../../domain/entity/user'
import UpdateUserUseCase from './update.user.usecase'

const user = new User('TestId', 'Test Name', 'test@test.com', 'test')

const MockRepository = () => {
  return {
    create: jest.fn(),
    delete: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(user)),
    update: jest.fn(),
  }
}

describe('Unit test UpdateUserUseCase', () => {
  it('should update a user', async () => {
    const repository = MockRepository()
    const usecase = new UpdateUserUseCase(repository)

    const input = {
      id: user.id,
      name: 'UpdatedName',
      email: 'update@update.com',
      password: 'update',
    }

    const output = {
      id: user.id,
      name: 'UpdatedName',
      email: 'update@update.com',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})
