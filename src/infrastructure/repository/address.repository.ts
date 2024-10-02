import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma.service'
import { AddressRepositoryInterface } from '../../application/interfaces/address/address-repository.interface'
import Address from '../../domain/entity/address'

@Injectable()
export class AddressRepository implements AddressRepositoryInterface {
  constructor(private readonly prisma: PrismaService) { }

  async create(address: Address): Promise<void> {
    await this.prisma.address.create({
      data: {
        id: address.id,
        zipCode: address.zipCode,
        street: address.street,
        number: address.number,
        district: address.district,
        state: address.state,
        city: address.city,
        customerId: address.customerId,
        complement: address.complement,
      },
    })
  }

  async update(address: Address): Promise<void> {
    await this.prisma.address.update({
      where: { id: address.id },
      data: {
        id: address.id,
        zipCode: address.zipCode,
        street: address.street,
        number: address.number,
        district: address.district,
        state: address.state,
        city: address.city,
        customerId: address.customerId,
        complement: address.complement,
      },
    })
  }

  async find(id: string): Promise<Address> {
    const findAddress = await this.prisma.address.findUnique({
      where: { id },
    })

    if (findAddress == undefined) {
      throw new Error(`Address not found`)
    }

    const address = new Address(
      id,
      findAddress.zipCode,
      findAddress.street,
      findAddress.number,
      findAddress.district,
      findAddress.state,
      findAddress.city,
      findAddress.customerId,
      findAddress.complement,
    )

    return address
  }

  async findByCustomer(customerId: string): Promise<Address[]> {
    const findAddress = await this.prisma.address.findMany({
      where: { customerId },
    })

    if (findAddress == undefined) {
      throw new Error(`Address not found`)
    }

    const addresses = findAddress.map((findAddress) => {
      const address = new Address(
        findAddress.id,
        findAddress.zipCode,
        findAddress.street,
        findAddress.number,
        findAddress.district,
        findAddress.state,
        findAddress.city,
        customerId,
        findAddress.complement,
      )

      return address
    })

    return addresses
  }

  async findAll(): Promise<Address[]> {
    const findAddresss = await this.prisma.address.findMany()
    const addresss = findAddresss.map((findAddress) => {
      const address = new Address(
        findAddress.id,
        findAddress.zipCode,
        findAddress.street,
        findAddress.number,
        findAddress.district,
        findAddress.state,
        findAddress.city,
        findAddress.customerId,
        findAddress.complement,
      )
      return address
    })
    return addresss
  }

  async delete(id: string): Promise<Address> {
    const findAddress = await this.prisma.address.findUnique({
      where: { id },
    })

    if (findAddress == undefined) {
      throw new Error(`Address not found`)
    }

    const deleteAddress = await this.prisma.address.delete({
      where: { id },
    })

    const address = new Address(
      deleteAddress.id,
      deleteAddress.zipCode,
      deleteAddress.street,
      deleteAddress.number,
      deleteAddress.district,
      deleteAddress.state,
      deleteAddress.city,
      deleteAddress.customerId,
      deleteAddress.complement,
    )

    return address
  }
}

export const AddressRepositoryProvider = {
  provide: AddressRepositoryInterface,
  useClass: AddressRepository,
}
