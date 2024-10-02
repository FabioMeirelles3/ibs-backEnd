import { Customer } from '../../../domain/entity/customer'
import { RepositoryInterface } from '../../../domain/repository/repository.interface'

export abstract class CustomerRepositoryInterface extends RepositoryInterface<Customer> { }
