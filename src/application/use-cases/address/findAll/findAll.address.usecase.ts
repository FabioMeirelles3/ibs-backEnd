import { Injectable } from '@nestjs/common'
import {
  InputFindAllAddressDto,
  OutputFindAllAddressDto,
} from './findAll.address.dto'
import { IFindAllAddressUseCase } from '../../../interfaces/address/findAllAddress.usecase.interface'
import { AddressRepositoryInterface } from '../../../interfaces/address/address-repository.interface'
import Address from '../../../../domain/entity/address'

@Injectable()
export default class FindAllAddressUseCase implements IFindAllAddressUseCase {
  constructor(private readonly addressRepository: AddressRepositoryInterface) { }

  async execute(
    input: InputFindAllAddressDto,
  ): Promise<OutputFindAllAddressDto> {
    const addresss = await this.addressRepository.findAll()

    return OutputMapper.toOutput(addresss)
  }
}

class OutputMapper {
  static toOutput(address: Address[]): OutputFindAllAddressDto {
    return {
      addresses: address.map((address) => ({
        id: address.id,
        zipCode: address.zipCode,
        street: address.street,
        number: address.number,
        district: address.district,
        state: address.state,
        city: address.city,
        customerId: address.customerId,
        complement: address.complement,
      })),
    }
  }
}

export const FindAllAddressUseCaseProvider = {
  provide: IFindAllAddressUseCase,
  useClass: FindAllAddressUseCase,
}
