import { Customer } from '../../../../domain/entity/customer'
import FindAllCustomerUseCase from './findAll.customer.usecase'

const customer1 = new Customer(
  'TestId1',
  'Test Name1',
  'Test Gender',
  '2021-01-31',
  'Teste MaritialStatus',
)

const customer2 = new Customer(
  'TestId1',
  'Test Name1',
  'Test Gender',
  '2021-01-31',
  'Teste MaritialStatus',
)

const MockRepository = () => {
  return {
    create: jest.fn(),
    delete: jest.fn(),
    find: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([customer1, customer2])),
  }
}

describe('Unit test FindAllCustomerUseCase', () => {
  it('should find all customers', async () => {
    const repository = MockRepository()
    const useCase = new FindAllCustomerUseCase(repository)

    const output = await useCase.execute({})

    expect(output.customers.length).toBe(2)
    expect(output.customers[0].id).toBe(customer1.id)
    expect(output.customers[0].name).toBe(customer1.name)
    expect(output.customers[0].gender).toBe(customer1.gender)
    expect(output.customers[0].birthDate).toBe(customer1.birthDate)
    expect(output.customers[0].maritialStatus).toBe(customer1.maritialStatus)
    expect(output.customers[0].active).toBe(customer1.isActive())
    expect(output.customers[1].id).toBe(customer2.id)
    expect(output.customers[1].name).toBe(customer2.name)
    expect(output.customers[1].gender).toBe(customer2.gender)
    expect(output.customers[1].birthDate).toBe(customer2.birthDate)
    expect(output.customers[1].maritialStatus).toBe(customer2.maritialStatus)
    expect(output.customers[1].active).toBe(customer2.isActive())
  })
})
