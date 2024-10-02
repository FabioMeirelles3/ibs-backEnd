import {
  InputFindAllUserDto,
  OutputFindAllUserDto,
} from '../../use-cases/user/findAll/findAll.user.dto'
import { UseCaseInterface } from '../usecase.interface'

export abstract class IFindAllUserUseCase extends UseCaseInterface<
  InputFindAllUserDto,
  OutputFindAllUserDto
> { }
