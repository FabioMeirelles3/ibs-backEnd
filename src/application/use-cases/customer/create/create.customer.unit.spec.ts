import CreateCustomerUseCase from './create.customer.usecase'

let input

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  }
}

describe('Unit test CreateCustomerUseCase', () => {
  beforeEach(() => {
    input = {
      name: 'Test Name1',
      gender: 'Test Gender',
      birthDate: '2021-01-31',
      maritialStatus: 'Teste MaritialStatus',
    }
  })
  it('should create a customer', async () => {
    const repository = MockRepository()
    const usecase = new CreateCustomerUseCase(repository)

    const output = await usecase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      gender: input.gender,
      birthDate: input.birthDate,
      maritialStatus: input.maritialStatus,
      active: true,
    })
  })

  it('should thrown an error when name is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateCustomerUseCase(repository)

    input.name = ''

    await expect(usecase.execute(input)).rejects.toThrow('Name is required')
  })
})
