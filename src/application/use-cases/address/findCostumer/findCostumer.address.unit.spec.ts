import Address from '../../../../domain/entity/address'
import FindCustomerAddressUseCase from './findCustomer.address.usecase'

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
    find: jest.fn(),
    delete: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByCustomer: jest.fn().mockReturnValue(Promise.resolve([address])),
  }
}

describe('Unit test FindEmailUserUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindCustomerAddressUseCase(repository)
  it('should return address', async () => {
    const input = { customerId: 'customer1' }

    const output = await usecase.execute(input)

    expect(output.addresses.length).toBe(1)
    expect(output.addresses[0].id).toBe(address.id)
    expect(output.addresses[0].zipCode).toBe(address.zipCode)
    expect(output.addresses[0].street).toBe(address.street)
    expect(output.addresses[0].number).toBe(address.number)
    expect(output.addresses[0].district).toBe(address.district)
    expect(output.addresses[0].state).toBe(address.state)
    expect(output.addresses[0].city).toBe(address.city)
    expect(output.addresses[0].customerId).toBe(address.customerId)
    expect(output.addresses[0].complement).toBe(address.complement)
  })

  it('should not find a user', async () => {
    const repository = MockRepository()
    repository.findByCustomer.mockImplementation(() => {
      throw new Error('Address not found')
    })
    const usecase = new FindCustomerAddressUseCase(repository)

    const input = { customerId: '1234' }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Address not found')
  })
})
