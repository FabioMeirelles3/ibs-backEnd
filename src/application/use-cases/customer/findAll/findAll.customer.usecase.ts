import { Injectable } from '@nestjs/common'
import {
  InputFindAllCustomerDto,
  OutputFindAllCustomerDto,
} from './findAll.customer.dto'
import { IFindAllCustomerUseCase } from '../../../interfaces/customer/findAllCustomer.usecase.interface'
import { CustomerRepositoryInterface } from '../../../interfaces/customer/customer-repository.interface'
import { Customer } from '../../../../domain/entity/customer'

@Injectable()
export default class FindAllCustomerUseCase implements IFindAllCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) { }

  async execute(
    input: InputFindAllCustomerDto,
  ): Promise<OutputFindAllCustomerDto> {
    const customers = await this.customerRepository.findAll()

    return OutputMapper.toOutput(customers)
  }
}

class OutputMapper {
  static toOutput(customer: Customer[]): OutputFindAllCustomerDto {
    return {
      customers: customer.map((customer) => ({
        id: customer.id,
        name: customer.name,
        gender: customer.gender,
        birthDate: customer.birthDate,
        maritialStatus: customer.maritialStatus,
        active: customer.isActive(),
        addresses: customer.getPublicAddresses(),
      })),
    }
  }
}

export const FindAllCustomerUseCaseProvider = {
  provide: IFindAllCustomerUseCase,
  useClass: FindAllCustomerUseCase,
}
