import {
  InputUpdateAddressDto,
  OutputUpdateAddressDto,
} from '../../use-cases/address/update/update.address.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IUpdateAddressUseCase extends UseCaseInterface<
  InputUpdateAddressDto,
  OutputUpdateAddressDto
> { }
