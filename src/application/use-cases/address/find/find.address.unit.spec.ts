import Address from '../../../../domain/entity/address'
import FindAddressUseCase from './find.address.usecase'

const address = new Address(
  '123',
  'test zip code',
  'test street',
  123,
  'test district',
  'test state',
  'test city',
  'customer1',
  'test complement',
)

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(address)),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByCustomer: jest.fn(),
    delete: jest.fn(),
  }
}

describe('Unit test FindAddressUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindAddressUseCase(repository)
  it('should return address data', async () => {
    const input = { id: '123' }

    const output = {
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

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a address', async () => {
    const repository = MockRepository()
    repository.find.mockImplementation(() => {
      throw new Error('Address not found')
    })
    const usecase = new FindAddressUseCase(repository)

    const input = {
      id: '1234',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Address not found')
  })
})
