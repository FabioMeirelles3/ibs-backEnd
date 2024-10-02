import { UserRepositoryInterface } from '../../../interfaces/user/user-repository.interface'
import { IUpdateUserUseCase } from '../../../interfaces/user/updateUser.usecase.interface'
import { InputUpdateUserDto, OutputUpdateUserDto } from './update.user.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputUpdateUserDto): Promise<OutputUpdateUserDto> {
    const user = await this.userRepository.find(input.id)

    user.changeName(input.name)
    if (!!input.email) {
      user.changeEmail(input.email)
    }
    await this.userRepository.update(user)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }
}

export const UpdateUserUseCaseProvider = {
  provide: IUpdateUserUseCase,
  useClass: UpdateUserUseCase,
}
