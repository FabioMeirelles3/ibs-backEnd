import {
  InputCreateUserDto,
  OutputCreateUserDto,
} from '../../use-cases/user/create/create.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class ICreateUserUseCase extends UseCaseInterface<
  InputCreateUserDto,
  OutputCreateUserDto
> { }
