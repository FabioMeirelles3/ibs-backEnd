import {
  InputUpdateUserDto,
  OutputUpdateUserDto,
} from '../../use-cases/user/update/update.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IUpdateUserUseCase extends UseCaseInterface<
  InputUpdateUserDto,
  OutputUpdateUserDto
> {}
