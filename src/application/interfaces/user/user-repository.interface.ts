import { User } from '../../../domain/entity/user'
import { RepositoryInterface } from '../../../domain/repository/repository.interface'

export abstract class UserRepositoryInterface extends RepositoryInterface<User> {
  abstract findByEmail(email: string): Promise<User>
}
