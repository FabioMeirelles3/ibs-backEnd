import { UserRepositoryInterface } from '../../../interfaces/user/user-repository.interface'
import { IFindAllUserUseCase } from '../../../interfaces/user/findAllUser.usecase.interface'
import { InputFindAllUserDto, OutputFindAllUserDto } from './findAll.user.dto'
import { Injectable } from '@nestjs/common'
import { User } from '../../../../domain/entity/user'

@Injectable()
export default class FindAllUserUseCase implements IFindAllUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) { }

  async execute(input: InputFindAllUserDto): Promise<OutputFindAllUserDto> {
    const users = await this.userRepository.findAll()

    return OutputMapper.toOutput(users)
  }
}

class OutputMapper {
  static toOutput(user: User[]): OutputFindAllUserDto {
    return {
      users: user.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      })),
    }
  }
}

export const FindAllUserUseCaseProvider = {
  provide: IFindAllUserUseCase,
  useClass: FindAllUserUseCase,
}
