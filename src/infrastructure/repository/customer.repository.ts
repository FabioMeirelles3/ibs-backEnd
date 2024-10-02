import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma.service'
import { Customer } from '../../domain/entity/customer'
import { CustomerRepositoryInterface } from '../../application/interfaces/customer/customer-repository.interface'
import Address from '../../domain/entity/address'

@Injectable()
export class CustomerRepository implements CustomerRepositoryInterface {
  constructor(private readonly prisma: PrismaService) { }

  async create(customer: Customer): Promise<void> {
    await this.prisma.customer.create({
      data: {
        id: customer.id,
        name: customer.name,
        gender: customer.gender,
        birthDate: new Date(customer.birthDate),
        maritialStatus: customer.maritialStatus,
        active: true,
      },
    })
  }

  async update(customer: Customer): Promise<void> {
    await this.prisma.customer.update({
      where: { id: customer.id },
      data: {
        id: customer.id,
        name: customer.name,
        gender: customer.gender,
        birthDate: new Date(customer.birthDate),
        maritialStatus: customer.maritialStatus,
        active: true,
      },
    })
  }

  async find(id: string): Promise<Customer> {
    const findCustomer = await this.prisma.customer.findUnique({
      where: { id },
      include: { addresses: true },
    })

    if (findCustomer == undefined) {
      throw new Error(`Customer not found`)
    }

    const addresses = findCustomer.addresses.map((address) => {
      const addresses = new Address(
        address.id,
        address.zipCode,
        address.street,
        address.number,
        address.district,
        address.state,
        address.city,
        address.customerId,
        address.complement,
      )

      return addresses
    })

    const customer = new Customer(
      id,
      findCustomer.name,
      findCustomer.gender,
      findCustomer.birthDate.toDateString(),
      findCustomer.maritialStatus,
      addresses,
    )

    return customer
  }

  async findAll(): Promise<Customer[]> {
    const findCustomers = await this.prisma.customer.findMany({
      include: { addresses: true },
    })

    const customers = findCustomers.map((findCustomer) => {
      const addresses = findCustomer.addresses.map((address) => {
        return new Address(
          address.id,
          address.zipCode,
          address.street,
          address.number,
          address.district,
          address.state,
          address.city,
          address.customerId,
          address.complement,
        )
      })

      return new Customer(
        findCustomer.id,
        findCustomer.name,
        findCustomer.gender,
        findCustomer.birthDate.toDateString(),
        findCustomer.maritialStatus,
        addresses,
      )
    })

    return customers
  }

  async delete(id: string): Promise<Customer> {
    const findCustomer = await this.prisma.customer.findUnique({
      where: { id },
    })

    if (findCustomer == undefined) {
      throw new Error(`Customer not found`)
    }

    const deleteCustomer = await this.prisma.customer.delete({
      where: { id },
    })

    const customer = new Customer(
      deleteCustomer.id,
      deleteCustomer.name,
      deleteCustomer.gender,
      deleteCustomer.birthDate.toDateString(),
      deleteCustomer.maritialStatus,
    )
    return customer
  }
}

export const CustomerRepositoryProvider = {
  provide: CustomerRepositoryInterface,
  useClass: CustomerRepository,
}
