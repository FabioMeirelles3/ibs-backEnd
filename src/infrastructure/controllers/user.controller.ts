import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  UseGuards,
  Delete,
} from '@nestjs/common'
import { ICreateUserUseCase } from '../../application/interfaces/user/createUser.usecase.interface'
import { IFindUserUseCase } from '../../application/interfaces/user/findUser.usecase.interface'
import { IFindAllUserUseCase } from '../../application/interfaces/user/findAllUser.usecase.interface'
import { IUpdateUserUseCase } from '../../application/interfaces/user/updateUser.usecase.interface'
import { IDeleteUserUseCase } from '../../application/interfaces/user/deleteUser.usecase.interface'
import { InputCreateUserDto } from '../../application/use-cases/user/create/create.user.dto'
import { InputUpdateUserDto } from '../../application/use-cases/user/update/update.user.dto'
import { InputFindUserDto } from '../../application/use-cases/user/find/find.user.dto'
import { InputDeleteUserDto } from '../../application/use-cases/user/delete/delete.user.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: ICreateUserUseCase,
    private readonly findUserUseCase: IFindUserUseCase,
    private readonly findAllUserUseCase: IFindAllUserUseCase,
    private readonly updateUserUseCase: IUpdateUserUseCase,
    private readonly deleteUserUseCase: IDeleteUserUseCase,
  ) { }

  @Post()
  async create(@Body() createUserDto: InputCreateUserDto) {
    return this.createUserUseCase.execute(createUserDto)
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateUserDto: InputUpdateUserDto) {
    return this.updateUserUseCase.execute(updateUserDto)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: InputFindUserDto) {
    return this.findUserUseCase.execute(id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.findAllUserUseCase.execute({})
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: InputDeleteUserDto) {
    return this.deleteUserUseCase.execute(id)
  }
}
