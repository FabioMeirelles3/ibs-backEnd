import type Address from '../../../domain/entity/address'
import { RepositoryInterface } from '../../../domain/repository/repository.interface'

export abstract class AddressRepositoryInterface extends RepositoryInterface<Address> {
  abstract findByCustomer(customerId: string): Promise<Address[]>
}
