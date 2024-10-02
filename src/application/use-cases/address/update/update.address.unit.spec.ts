import Address from '../../../../domain/entity/address'
import UpdateAddressUseCase from './update.address.usecase'

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
    create: jest.fn(),
    findAll: jest.fn(),
    findByCustomer: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(address)),
    update: jest.fn(),
    delete: jest.fn(),
  }
}

describe('Unit test UpdateAddressUseCase', () => {
  it('should update a address', async () => {
    const repository = MockRepository()
    const usecase = new UpdateAddressUseCase(repository)

    const input = {
      id: address.id,
      zipCode: 'testUpdated zip code',
      street: 'testUpdated street',
      number: 1234,
      district: 'testUpdated district',
      state: 'testUpdated state',
      city: 'testUpdated city',
      customerId: 'customer1',
      complement: 'testUpdated complement',
    }

    const output = {
      id: address.id,
      zipCode: 'testUpdated zip code',
      street: 'testUpdated street',
      number: 1234,
      district: 'testUpdated district',
      state: 'testUpdated state',
      city: 'testUpdated city',
      customerId: 'customer1',
      complement: 'testUpdated complement',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})
