import Address from '../../../../domain/entity/address'
import { AddressRepositoryInterface } from '../../../interfaces/address/address-repository.interface'
import { IFindCustomerAddressUseCase } from '../../../interfaces/address/findCustomerAddress.usecase.interface copy'
import {
  InputFindCustomerAddressDto,
  OutputFindCustomerAddressDto,
} from './findCostumer.address.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export default class FindCustomerAddressUseCase
  implements IFindCustomerAddressUseCase {
  constructor(private readonly addressRepository: AddressRepositoryInterface) { }

  async execute(
    input: InputFindCustomerAddressDto,
  ): Promise<OutputFindCustomerAddressDto> {
    const addresses = await this.addressRepository.findByCustomer(
      input.toString(),
    )

    return OutputMapper.toOutput(addresses)
  }
}

class OutputMapper {
  static toOutput(address: Address[]): OutputFindCustomerAddressDto {
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

export const FindCustomerAddressUseCaseProvider = {
  provide: IFindCustomerAddressUseCase,
  useClass: FindCustomerAddressUseCase,
}
