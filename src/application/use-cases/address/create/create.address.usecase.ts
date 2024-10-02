import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { ICreateAddressUseCase } from '../../../interfaces/address/createAddress.usecase.interface'
import { AddressRepositoryInterface } from '../../../interfaces/address/address-repository.interface'
import {
  InputCreateAddressDto,
  OutputCreateAddressDto,
} from './create.address.dto'
import Address from '../../../../domain/entity/address'

@Injectable()
export default class CreateAddressUseCase implements ICreateAddressUseCase {
  constructor(private readonly addressRepository: AddressRepositoryInterface) { }

  async execute(input: InputCreateAddressDto): Promise<OutputCreateAddressDto> {
    const address = new Address(
      uuid(),
      input.zipCode,
      input.street,
      input.number,
      input.district,
      input.state,
      input.city,
      input.customerId,
      input.complement,
    )

    await this.addressRepository.create(address)

    return {
      id: address.id,
      zipCode: address.zipCode,
      street: address.street,
      number: address.number,
      district: address.district,
      state: address.state,
      city: address.city,
      customerId: address.customerId,
      complement: address.complement,
    }
  }
}

export const CreateAddressUseCaseProvider = {
  provide: ICreateAddressUseCase,
  useClass: CreateAddressUseCase,
}
