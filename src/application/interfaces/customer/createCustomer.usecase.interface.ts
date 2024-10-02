import {
  InputCreateCustomerDto,
  OutputCreateCustomerDto,
} from '../../use-cases/customer/create/create.customer.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class ICreateCustomerUseCase extends UseCaseInterface<
  InputCreateCustomerDto,
  OutputCreateCustomerDto
> { }
