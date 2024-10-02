import { Injectable } from '@nestjs/common'
import { UserRepositoryInterface } from '../../../interfaces/user/user-repository.interface'
import { InputDeleteUserDto, OutputDeleteUserDto } from './delete.user.dto'
import { IDeleteUserUseCase } from '../../../interfaces/user/deleteUser.usecase.interface'

@Injectable()
export default class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) { }

  async execute(input: InputDeleteUserDto): Promise<OutputDeleteUserDto> {
    const user = await this.userRepository.delete(input.toString())

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }
}

export const DeleteUserUseCaseProvider = {
  provide: IDeleteUserUseCase,
  useClass: DeleteUserUseCase,
}
