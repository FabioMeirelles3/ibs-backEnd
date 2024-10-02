import {
  InputFindAllCustomerDto,
  OutputFindAllCustomerDto,
} from '../../use-cases/customer/findAll/findAll.customer.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAllCustomerUseCase extends UseCaseInterface<
  InputFindAllCustomerDto,
  OutputFindAllCustomerDto
> { }
