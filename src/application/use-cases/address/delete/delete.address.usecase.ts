import { Injectable } from '@nestjs/common'
import { AddressRepositoryInterface } from '../../../interfaces/address/address-repository.interface'
import { IDeleteAddressUseCase } from '../../../interfaces/address/deleteAddress.usecase.interface'
import type {
  InputDeleteAddressDto,
  OutputDeleteAddressDto,
} from './delete.address.dto'

@Injectable()
export default class DeleteAddressUseCase implements IDeleteAddressUseCase {
  constructor(private readonly addressRepository: AddressRepositoryInterface) { }

  async execute(input: InputDeleteAddressDto): Promise<OutputDeleteAddressDto> {
    const address = await this.addressRepository.delete(input.toString())

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

export const DeleteAddressUseCaseProvider = {
  provide: IDeleteAddressUseCase,
  useClass: DeleteAddressUseCase,
}
