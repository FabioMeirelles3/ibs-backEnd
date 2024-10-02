import { User } from '../../../../domain/entity/user'
import FindAllUserUseCase from './findAll.user.usecase'

const user1 = new User('TestId1', 'Test Name1', 'test1@test.com', 'test1')

const user2 = new User('TestId2', 'Test2 Name', 'test2@test.com', 'test2')

const MockRepository = () => {
  return {
    create: jest.fn(),
    delete: jest.fn(),
    find: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([user1, user2])),
  }
}

describe('Unit test FindAllUserUseCase', () => {
  it('should find all users', async () => {
    const repository = MockRepository()
    const useCase = new FindAllUserUseCase(repository)

    const output = await useCase.execute({})

    expect(output.users.length).toBe(2)
    expect(output.users[0].id).toBe(user1.id)
    expect(output.users[0].name).toBe(user1.name)
    expect(output.users[0].email).toBe(user1.email)
    expect(output.users[1].id).toBe(user2.id)
    expect(output.users[1].name).toBe(user2.name)
    expect(output.users[1].email).toBe(user2.email)
  })
})
