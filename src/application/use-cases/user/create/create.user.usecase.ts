import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { ICreateUserUseCase } from '../../../interfaces/user/createUser.usecase.interface'
import { UserRepositoryInterface } from '../../../interfaces/user/user-repository.interface'
import { InputCreateUserDto, OutputCreateUserDto } from './create.user.dto'
import { User } from '../../../../domain/entity/user'

@Injectable()
export default class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
    const user = new User(uuid(), input.name, input.email, input.password)

    await this.userRepository.create(user)

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }
}

export const CreateUserUseCaseProvider = {
  provide: ICreateUserUseCase,
  useClass: CreateUserUseCase,
}
