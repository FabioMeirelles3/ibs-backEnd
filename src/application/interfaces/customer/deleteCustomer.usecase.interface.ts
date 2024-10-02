import type {
  InputDeleteCustomerDto,
  OutputDeleteCustomerDto,
} from '../../use-cases/customer/delete/delete.customer.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IDeleteCustomerUseCase extends UseCaseInterface<
  InputDeleteCustomerDto,
  OutputDeleteCustomerDto
> { }
