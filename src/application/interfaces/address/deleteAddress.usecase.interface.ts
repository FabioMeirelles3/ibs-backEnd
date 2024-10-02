import type {
  InputDeleteAddressDto,
  OutputDeleteAddressDto,
} from '../../use-cases/address/delete/delete.address.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IDeleteAddressUseCase extends UseCaseInterface<
  InputDeleteAddressDto,
  OutputDeleteAddressDto
> { }
