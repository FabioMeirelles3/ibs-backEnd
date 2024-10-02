import { Customer } from '../../../../domain/entity/customer'
import DeleteCustomerUseCase from './delete.customer.usecase'

const customer = new Customer(
  'TestId1',
  'Test Name1',
  'Test Gender',
  '2021-01-31',
  'Teste MaritialStatus',
)

const MockRepository = () => {
  return {
    find: jest.fn(),
    delete: jest.fn().mockReturnValue(Promise.resolve(customer)),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByCustomer: jest.fn(),
  }
}

describe('Unit test DeleteCustomerUseCase', () => {
  const repository = MockRepository()
  const usecase = new DeleteCustomerUseCase(repository)
  it('should return customer data', async () => {
    const input = { id: 'TestId1' }

    const output = {
      id: 'TestId1',
      name: 'Test Name1',
      gender: 'Test Gender',
      birthDate: '2021-01-31',
      maritialStatus: 'Teste MaritialStatus',
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a customer', async () => {
    const repository = MockRepository()
    repository.delete.mockImplementation(() => {
      throw new Error('Customer not found')
    })
    const usecase = new DeleteCustomerUseCase(repository)

    const input = {
      id: '1234',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Customer not found')
  })
})
