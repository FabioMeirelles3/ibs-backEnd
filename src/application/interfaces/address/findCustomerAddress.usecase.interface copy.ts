import type {
  InputFindCustomerAddressDto,
  OutputFindCustomerAddressDto,
} from '../../use-cases/address/findCostumer/findCostumer.address.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindCustomerAddressUseCase extends UseCaseInterface<
  InputFindCustomerAddressDto,
  OutputFindCustomerAddressDto
> { }
