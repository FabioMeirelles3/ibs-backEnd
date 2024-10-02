import { Injectable } from '@nestjs/common'
import { UserRepositoryInterface } from '../../../interfaces/user/user-repository.interface'
import { InputFindUserDto, OutputFindUserDto } from './find.user.dto'
import { IFindUserUseCase } from '../../../interfaces/user/findUser.usecase.interface'

@Injectable()
export default class FindUserUseCase implements IFindUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputFindUserDto): Promise<OutputFindUserDto> {
    const user = await this.userRepository.find(input.toString())

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }
}

export const FindUserUseCaseProvider = {
  provide: IFindUserUseCase,
  useClass: FindUserUseCase,
}
