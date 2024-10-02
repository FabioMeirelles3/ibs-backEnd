import {
  InputCreateAddressDto,
  OutputCreateAddressDto,
} from '../../use-cases/address/create/create.address.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class ICreateAddressUseCase extends UseCaseInterface<
  InputCreateAddressDto,
  OutputCreateAddressDto
> { }
