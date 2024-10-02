import { Injectable, UnauthorizedException } from '@nestjs/common'
import { IAuthUseCase } from '../../interfaces/auth/auth.usecase.interface'
import { IBcryptService } from '../../../infrastructure/auth/interfaces/bcrypt.interface'
import { IJwtService } from '../../../infrastructure/auth/interfaces/jwt.interface'
import {
  InputAuthenticateUserDto,
  OutputAuthenticateUserDto,
} from './authenticate.user.dto'
import { UserRepositoryInterface } from '../../interfaces/user/user-repository.interface'

@Injectable()
export default class AuthenticationUseCase implements IAuthUseCase {
  constructor(
    private readonly userRepository: UserRepositoryInterface,
    private readonly bcryptService: IBcryptService,
    private readonly jwtService: IJwtService,
  ) { }

  async execute(
    input: InputAuthenticateUserDto,
  ): Promise<OutputAuthenticateUserDto> {
    const findUserLogin = await this.userRepository.findByEmail(input.email)

    if (!findUserLogin) {
      throw new UnauthorizedException('User credentials do not match.')
    }

    const isPasswordValid = await this.bcryptService.compare(
      input.password,
      findUserLogin.password,
    )

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match.')
    }

    const accessToken = this.jwtService.createToken(findUserLogin.id)

    return {
      access_token: accessToken,
    }
  }
}

export const AuthenticationUseCaseProvider = {
  provide: IAuthUseCase,
  useClass: AuthenticationUseCase,
}
