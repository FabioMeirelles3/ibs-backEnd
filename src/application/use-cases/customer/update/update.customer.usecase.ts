import { CustomerRepositoryInterface } from '../../../interfaces/customer/customer-repository.interface'
import { IUpdateCustomerUseCase } from '../../../interfaces/customer/updateCustomer.usecase.interface'
import {
  InputUpdateCustomerDto,
  OutputUpdateCustomerDto,
} from './update.customer.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class UpdateCustomerUseCase implements IUpdateCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  async execute(
    input: InputUpdateCustomerDto,
  ): Promise<OutputUpdateCustomerDto> {
    const customer = await this.customerRepository.find(input.id)

    if (!!input.name) {
      customer.changeName(input.name)
    }
    if (!!input.gender) {
      customer.changeGender(input.gender)
    }
    if (!!input.birthDate) {
      customer.changeBirthDate(input.birthDate)
    }
    if (!!input.maritialStatus) {
      customer.changeMaritialStatus(input.maritialStatus)
    }

    await this.customerRepository.update(customer)

    return {
      id: customer.id,
      name: customer.name,
      gender: customer.gender,
      birthDate: customer.birthDate,
      maritialStatus: customer.maritialStatus,
    }
  }
}

export const UpdateCustomerUseCaseProvider = {
  provide: IUpdateCustomerUseCase,
  useClass: UpdateCustomerUseCase,
}
