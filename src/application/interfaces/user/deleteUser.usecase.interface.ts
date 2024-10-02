import {
  InputDeleteUserDto,
  OutputDeleteUserDto,
} from '../../use-cases/user/delete/delete.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IDeleteUserUseCase extends UseCaseInterface<
  InputDeleteUserDto,
  OutputDeleteUserDto
> { }
