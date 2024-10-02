import {
  InputAuthenticateUserDto,
  OutputAuthenticateUserDto,
} from 'src/application/use-cases/auth/authenticate.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IAuthUseCase extends UseCaseInterface<
  InputAuthenticateUserDto,
  OutputAuthenticateUserDto
> { }
