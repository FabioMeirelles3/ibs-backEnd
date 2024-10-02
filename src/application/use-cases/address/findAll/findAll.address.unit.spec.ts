import Address from '../../../../domain/entity/address'
import FindAllAddressUseCase from './findAll.address.usecase'

const address1 = new Address(
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

const address2 = new Address(
  '1234',
  'test2 zip code',
  'test2 street',
  1234,
  'test2 district',
  'test2 state',
  'test2 city',
  'customer2',
  'test2 complement',
)

const MockRepository = () => {
  return {
    create: jest.fn(),
    delete: jest.fn(),
    find: jest.fn(),
    findByCustomer: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([address1, address2])),
  }
}

describe('Unit test FindAllAddressUseCase', () => {
  it('should find all addresses', async () => {
    const repository = MockRepository()
    const useCase = new FindAllAddressUseCase(repository)

    const output = await useCase.execute({})

    expect(output.addresses.length).toBe(2)
    expect(output.addresses[0].id).toBe(address1.id)
    expect(output.addresses[0].zipCode).toBe(address1.zipCode)
    expect(output.addresses[0].street).toBe(address1.street)
    expect(output.addresses[0].number).toBe(address1.number)
    expect(output.addresses[0].district).toBe(address1.district)
    expect(output.addresses[0].state).toBe(address1.state)
    expect(output.addresses[0].city).toBe(address1.city)
    expect(output.addresses[0].customerId).toBe(address1.customerId)
    expect(output.addresses[0].complement).toBe(address1.complement)
    expect(output.addresses[1].id).toBe(address2.id)
    expect(output.addresses[1].zipCode).toBe(address2.zipCode)
    expect(output.addresses[1].street).toBe(address2.street)
    expect(output.addresses[1].number).toBe(address2.number)
    expect(output.addresses[1].district).toBe(address2.district)
    expect(output.addresses[1].state).toBe(address2.state)
    expect(output.addresses[1].city).toBe(address2.city)
    expect(output.addresses[1].customerId).toBe(address2.customerId)
    expect(output.addresses[1].complement).toBe(address2.complement)
  })
})
