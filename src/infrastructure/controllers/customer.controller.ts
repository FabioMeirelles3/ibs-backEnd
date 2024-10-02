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
import { ICreateCustomerUseCase } from '../../application/interfaces/customer/createCustomer.usecase.interface'
import { IFindCustomerUseCase } from '../../application/interfaces/customer/findCustomer.usecase.interface'
import { IFindAllCustomerUseCase } from '../../application/interfaces/customer/findAllCustomer.usecase.interface'
import { IUpdateCustomerUseCase } from '../../application/interfaces/customer/updateCustomer.usecase.interface'
import { IDeleteCustomerUseCase } from '../../application/interfaces/customer/deleteCustomer.usecase.interface'
import { InputCreateCustomerDto } from '../../application/use-cases/customer/create/create.customer.dto'
import { InputUpdateCustomerDto } from '../../application/use-cases/customer/update/update.customer.dto'
import { InputFindCustomerDto } from '../../application/use-cases/customer/find/find.customer.dto'
import { InputDeleteCustomerDto } from '../../application/use-cases/customer/delete/delete.customer.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: ICreateCustomerUseCase,
    private readonly findCustomerUseCase: IFindCustomerUseCase,
    private readonly findAllCustomerUseCase: IFindAllCustomerUseCase,
    private readonly updateCustomerUseCase: IUpdateCustomerUseCase,
    private readonly deleteCustomerUseCase: IDeleteCustomerUseCase,
  ) { }

  @Post()
  async create(@Body() createCustomerDto: InputCreateCustomerDto) {
    return this.createCustomerUseCase.execute(createCustomerDto)
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateCustomerDto: InputUpdateCustomerDto) {
    return this.updateCustomerUseCase.execute(updateCustomerDto)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: InputFindCustomerDto) {
    return this.findCustomerUseCase.execute(id)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.findAllCustomerUseCase.execute({})
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: InputDeleteCustomerDto) {
    return this.deleteCustomerUseCase.execute(id)
  }
}
