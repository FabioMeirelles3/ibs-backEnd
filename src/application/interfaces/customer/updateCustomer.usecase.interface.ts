import {
  InputUpdateCustomerDto,
  OutputUpdateCustomerDto,
} from '../../use-cases/customer/update/update.customer.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IUpdateCustomerUseCase extends UseCaseInterface<
  InputUpdateCustomerDto,
  OutputUpdateCustomerDto
> { }
