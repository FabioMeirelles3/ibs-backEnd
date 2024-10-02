import {
  InputFindCustomerDto,
  OutputFindCustomerDto,
} from '../../use-cases/customer/find/find.customer.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindCustomerUseCase extends UseCaseInterface<
  InputFindCustomerDto,
  OutputFindCustomerDto
> { }
