import { Injectable } from '@nestjs/common'
import { CustomerRepositoryInterface } from '../../../interfaces/customer/customer-repository.interface'
import {
  InputFindCustomerDto,
  OutputFindCustomerDto,
} from './find.customer.dto'
import { IFindCustomerUseCase } from '../../../interfaces/customer/findCustomer.usecase.interface'

@Injectable()
export default class FindCustomerUseCase implements IFindCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) { }

  async execute(input: InputFindCustomerDto): Promise<OutputFindCustomerDto> {
    const customer = await this.customerRepository.find(input.toString())

    return {
      id: customer.id,
      name: customer.name,
      gender: customer.gender,
      birthDate: customer.birthDate,
      maritialStatus: customer.maritialStatus,
      active: customer.isActive(),
      addresses: customer.getPublicAddresses(),
    }
  }
}

export const FindCustomerUseCaseProvider = {
  provide: IFindCustomerUseCase,
  useClass: FindCustomerUseCase,
}
