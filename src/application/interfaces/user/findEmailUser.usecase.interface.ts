import {
  InputFindEmailUserDto,
  OutputFindEmailUserDto,
} from '../../use-cases/user/findEmail/findEmail.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindEmailUserUseCase extends UseCaseInterface<
  InputFindEmailUserDto,
  OutputFindEmailUserDto
> {}
