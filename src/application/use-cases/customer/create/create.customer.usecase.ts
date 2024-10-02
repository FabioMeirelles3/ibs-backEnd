import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { ICreateCustomerUseCase } from '../../../interfaces/customer/createCustomer.usecase.interface'
import { CustomerRepositoryInterface } from '../../../interfaces/customer/customer-repository.interface'
import {
  InputCreateCustomerDto,
  OutputCreateCustomerDto,
} from './create.customer.dto'
import { Customer } from '../../../../domain/entity/customer'

@Injectable()
export default class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) { }

  async execute(
    input: InputCreateCustomerDto,
  ): Promise<OutputCreateCustomerDto> {
    const user = new Customer(
      uuid(),
      input.name,
      input.gender,
      input.birthDate,
      input.maritialStatus,
    )

    await this.customerRepository.create(user)

    return {
      id: user.id,
      name: user.name,
      gender: user.gender,
      birthDate: user.birthDate,
      maritialStatus: user.maritialStatus,
      active: user.isActive(),
    }
  }
}

export const CreateCustomerUseCaseProvider = {
  provide: ICreateCustomerUseCase,
  useClass: CreateCustomerUseCase,
}
