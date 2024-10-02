import {
  InputFindAllAddressDto,
  OutputFindAllAddressDto,
} from '../../use-cases/address/findAll/findAll.address.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAllAddressUseCase extends UseCaseInterface<
  InputFindAllAddressDto,
  OutputFindAllAddressDto
> { }
