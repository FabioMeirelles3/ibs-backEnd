import { Customer } from '../../../../domain/entity/customer'
import UpdateCustomerUseCase from './update.customer.usecase'

const customer = new Customer(
  'TestId1',
  'Test Name1',
  'Test Gender',
  'Test BirthDate',
  'Teste MaritialStatus',
)
const MockRepository = () => {
  return {
    create: jest.fn(),
    delete: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    update: jest.fn(),
  }
}

describe('Unit test UpdateCustomerUseCase', () => {
  it('should update a customer', async () => {
    const repository = MockRepository()
    const usecase = new UpdateCustomerUseCase(repository)

    const input = {
      id: customer.id,
      name: 'UpdatedName',
      gender: 'UpdatedGender',
      birthDate: 'UpdatedBirthDate',
      maritialStatus: 'UpdatedMaritialStatus',
    }

    const output = {
      id: customer.id,
      name: 'UpdatedName',
      gender: 'UpdatedGender',
      birthDate: 'UpdatedBirthDate',
      maritialStatus: 'UpdatedMaritialStatus',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})
