import {
  InputFindUserDto,
  OutputFindUserDto,
} from '../../use-cases/user/find/find.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindUserUseCase extends UseCaseInterface<
  InputFindUserDto,
  OutputFindUserDto
> {}
