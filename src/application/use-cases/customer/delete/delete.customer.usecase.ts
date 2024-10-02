import { Injectable } from '@nestjs/common'
import { CustomerRepositoryInterface } from '../../../interfaces/customer/customer-repository.interface'
import type {
  InputDeleteCustomerDto,
  OutputDeleteCustomerDto,
} from '../../customer/delete/delete.customer.dto'
import { IDeleteCustomerUseCase } from '../../../interfaces/customer/deleteCustomer.usecase.interface'

@Injectable()
export default class DeleteCustomerUseCase implements IDeleteCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) { }

  async execute(
    input: InputDeleteCustomerDto,
  ): Promise<OutputDeleteCustomerDto> {
    const customer = await this.customerRepository.delete(input.toString())

    return {
      id: customer.id,
      name: customer.name,
      gender: customer.gender,
      birthDate: customer.birthDate,
      maritialStatus: customer.maritialStatus,
    }
  }
}

export const DeleteCustomerUseCaseProvider = {
  provide: IDeleteCustomerUseCase,
  useClass: DeleteCustomerUseCase,
}
