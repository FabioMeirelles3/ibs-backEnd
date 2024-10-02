import { UserRepositoryInterface } from '../../../interfaces/user/user-repository.interface'
import { IFindEmailUserUseCase } from '../../../interfaces/user/findEmailUser.usecase.interface'
import {
  InputFindEmailUserDto,
  OutputFindEmailUserDto,
} from './findEmail.user.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class FindEmailUserUseCase implements IFindEmailUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputFindEmailUserDto): Promise<OutputFindEmailUserDto> {
    const user = await this.userRepository.findByEmail(input.toString())

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    }
  }
}

export const FindEmailUserUseCaseProvider = {
  provide: IFindEmailUserUseCase,
  useClass: FindEmailUserUseCase,
}
