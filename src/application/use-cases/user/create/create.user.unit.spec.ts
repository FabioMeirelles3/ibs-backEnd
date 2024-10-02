import CreateUserUseCase from './create.user.usecase'

let input

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
  }
}

describe('Unit test CreateUserUseCase', () => {
  beforeEach(() => {
    input = {
      name: 'Test Name',
      email: 'test@test.com',
      password: 'test',
    }
  })
  it('should create a user', async () => {
    const repository = MockRepository()
    const usecase = new CreateUserUseCase(repository)

    const output = await usecase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      email: input.email,
    })
  })

  it('should thrown an error when name is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateUserUseCase(repository)

    input.name = ''

    await expect(usecase.execute(input)).rejects.toThrow('Name is required')
  })

  it('should thrown an error when email is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateUserUseCase(repository)

    input.email = ''

    await expect(usecase.execute(input)).rejects.toThrow('Email is required')
  })
})
