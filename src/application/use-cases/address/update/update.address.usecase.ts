import { AddressRepositoryInterface } from '../../../interfaces/address/address-repository.interface'
import { IUpdateAddressUseCase } from '../../../interfaces/address/updateAddress.usecase.interface'
import {
  InputUpdateAddressDto,
  OutputUpdateAddressDto,
} from './update.address.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class UpdateAddressUseCase implements IUpdateAddressUseCase {
  constructor(private readonly addressRepository: AddressRepositoryInterface) { }

  async execute(input: InputUpdateAddressDto): Promise<OutputUpdateAddressDto> {
    const address = await this.addressRepository.find(input.id)

    if (!!input.zipCode) {
      address.changeZipCode(input.zipCode)
    }

    if (!!input.street) {
      address.changeStreet(input.street)
    }

    if (!!input.number) {
      address.changeNumber(input.number)
    }

    if (!!input.district) {
      address.changeDistrict(input.district)
    }

    if (!!input.state) {
      address.changeState(input.state)
    }

    if (!!input.city) {
      address.changeCity(input.city)
    }

    if (!!input.complement) {
      address.changeComplement(input.complement)
    }

    await this.addressRepository.update(address)

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

export const UpdateAddressUseCaseProvider = {
  provide: IUpdateAddressUseCase,
  useClass: UpdateAddressUseCase,
}
