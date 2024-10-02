import {
  InputFindAddressDto,
  OutputFindAddressDto,
} from '../../use-cases/address/find/find.address.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAddressUseCase extends UseCaseInterface<
  InputFindAddressDto,
  OutputFindAddressDto
> { }
