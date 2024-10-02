import CreateAddressUseCase from './create.address.usecase'

let input

const MockRepository = () => {
  return {
    find: jest.fn(),
    delete: jest.fn(),
    findAll: jest.fn(),
    findByCustomer: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
}

describe('Unit test CreateAddressUseCase', () => {
  beforeEach(() => {
    input = {
      id: '123',
      zipCode: 'test zip code',
      street: 'test street',
      number: 123,
      district: 'test district',
      state: 'test state',
      city: 'test city',
      customerId: 'customer1',
      complement: 'test complement',
    }
  })
  it('should create a address', async () => {
    const repository = MockRepository()
    const usecase = new CreateAddressUseCase(repository)

    const output = await usecase.execute(input)

    expect(output).toEqual({
      id: expect.any(String),
      zipCode: input.zipCode,
      street: input.street,
      number: input.number,
      district: input.district,
      state: input.state,
      city: input.city,
      customerId: input.customerId,
      complement: input.complement,
    })
  })

  it('should thrown an error when zipcode is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateAddressUseCase(repository)

    input.zipCode = ''

    await expect(usecase.execute(input)).rejects.toThrow('Zip Code is required')
  })

  it('should thrown an error when customerId is missing', async () => {
    const repository = MockRepository()
    const usecase = new CreateAddressUseCase(repository)

    input.customerId = ''

    await expect(usecase.execute(input)).rejects.toThrow(
      'CustomerId is required',
    )
  })
})
