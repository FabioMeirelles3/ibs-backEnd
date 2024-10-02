import { Injectable } from '@nestjs/common'
import { AddressRepositoryInterface } from '../../../interfaces/address/address-repository.interface'
import { InputFindAddressDto, OutputFindAddressDto } from './find.address.dto'
import { IFindAddressUseCase } from '../../../interfaces/address/findAddress.usecase.interface'

@Injectable()
export default class FindAddressUseCase implements IFindAddressUseCase {
  constructor(private readonly addressRepository: AddressRepositoryInterface) { }

  async execute(input: InputFindAddressDto): Promise<OutputFindAddressDto> {
    const address = await this.addressRepository.find(input.toString())

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

export const FindAddressUseCaseProvider = {
  provide: IFindAddressUseCase,
  useClass: FindAddressUseCase,
}
