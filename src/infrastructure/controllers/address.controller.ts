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
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ICreateAddressUseCase } from '../../application/interfaces/address/createAddress.usecase.interface'
import { IFindAddressUseCase } from '../../application/interfaces/address/findAddress.usecase.interface'
import { IFindAllAddressUseCase } from '../../application/interfaces/address/findAllAddress.usecase.interface'
import { IUpdateAddressUseCase } from '../../application/interfaces/address/updateAddress.usecase.interface'
import { InputCreateAddressDto } from '../../application/use-cases/address/create/create.address.dto'
import { InputUpdateAddressDto } from '../../application/use-cases/address/update/update.address.dto'
import { InputFindAddressDto } from '../../application/use-cases/address/find/find.address.dto'
import { IFindCustomerAddressUseCase } from '../../application/interfaces/address/findCustomerAddress.usecase.interface copy'
import { InputFindCustomerAddressDto } from '../../application/use-cases/address/findCostumer/findCostumer.address.dto'
import { InputDeleteAddressDto } from '../../application/use-cases/address/delete/delete.address.dto'
import { IDeleteAddressUseCase } from '../../application/interfaces/address/deleteAddress.usecase.interface'

@Controller('address')
export class AddressController {
  constructor(
    private readonly createAddressUseCase: ICreateAddressUseCase,
    private readonly findAddressUseCase: IFindAddressUseCase,
    private readonly deleteAddressUseCase: IDeleteAddressUseCase,
    private readonly findAllAddressUseCase: IFindAllAddressUseCase,
    private readonly findCustomerAddressUseCase: IFindCustomerAddressUseCase,
    private readonly updateAddressUseCase: IUpdateAddressUseCase,
  ) { }

  @Post()
  async create(@Body() createAddressDto: InputCreateAddressDto) {
    return this.createAddressUseCase.execute(createAddressDto)
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Body() updateAddressDto: InputUpdateAddressDto) {
    return this.updateAddressUseCase.execute(updateAddressDto)
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: InputFindAddressDto) {
    return this.findAddressUseCase.execute(id)
  }

  @Get('cust/:customerId')
  @UseGuards(JwtAuthGuard)
  async findByCustomerId(
    @Param('customerId') customerId: InputFindCustomerAddressDto,
  ) {
    return this.findCustomerAddressUseCase.execute(customerId)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.findAllAddressUseCase.execute({})
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: InputDeleteAddressDto) {
    return this.deleteAddressUseCase.execute(id)
  }
}
