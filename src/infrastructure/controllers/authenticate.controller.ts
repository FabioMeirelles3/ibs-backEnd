import { Controller, Post, Body } from '@nestjs/common'
import { IAuthUseCase } from '../../application/interfaces/auth/auth.usecase.interface'
import { InputAuthenticateUserDto } from '../../application/use-cases/auth/authenticate.user.dto'

@Controller('sessions')
export class AuthenticateController {
  constructor(private readonly authenticationCustomerUseCase: IAuthUseCase) { }

  @Post()
  async authentication(
    @Body() authenticationCustomerDto: InputAuthenticateUserDto,
  ) {
    return this.authenticationCustomerUseCase.execute(authenticationCustomerDto)
  }
}
