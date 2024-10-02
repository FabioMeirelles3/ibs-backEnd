import { Customer } from '../../../../domain/entity/customer'
import FindCustomerUseCase from './find.customer.usecase'

const customer = new Customer(
  'TestId1',
  'Test Name1',
  'Test Gender',
  '2021-01-31',
  'Teste MaritialStatus',
)

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    delete: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn(),
    findByEmail: jest.fn(),
  }
}

describe('Unit test FindCustomerUseCase', () => {
  const repository = MockRepository()
  const usecase = new FindCustomerUseCase(repository)
  it('should return customer data', async () => {
    const input = { id: 'TestId' }

    const output = {
      id: 'TestId1',
      name: 'Test Name1',
      gender: 'Test Gender',
      birthDate: '2021-01-31',
      maritialStatus: 'Teste MaritialStatus',
      active: true,
    }

    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })

  it('should not find a customer', async () => {
    const repository = MockRepository()
    repository.find.mockImplementation(() => {
      throw new Error('Customer not found')
    })
    const usecase = new FindCustomerUseCase(repository)

    const input = {
      id: 'TesteId2',
    }

    expect(() => {
      return usecase.execute(input)
    }).rejects.toThrow('Customer not found')
  })
})
