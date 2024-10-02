import { Injectable } from '@nestjs/common'
import { hash } from 'bcryptjs'
import { PrismaService } from '../database/prisma.service'
import { User } from '../../domain/entity/user'
import { UserRepositoryInterface } from '../../application/interfaces/user/user-repository.interface'

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly prisma: PrismaService) { }

  async create(user: User): Promise<void> {
    const hashedPassword = await hash(user.password, 10)
    await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: hashedPassword,
        active: true,
      },
    })
  }

  async update(user: User): Promise<void> {
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    })
  }

  async find(id: string): Promise<User> {
    const findUser = await this.prisma.user.findUnique({
      where: { id },
    })

    if (findUser == undefined) {
      throw new Error(`User not found`)
    }

    const user = new User(id, findUser.name, findUser.email, findUser.password)

    return user
  }

  async findAll(): Promise<User[]> {
    const findUsers = await this.prisma.user.findMany()
    const users = findUsers.map((findUser) => {
      const user = new User(
        findUser.id,
        findUser.name,
        findUser.email,
        findUser.password,
      )
      return user
    })
    return users
  }

  async findByEmail(email: string): Promise<User> {
    let findUser
    try {
      findUser = await this.prisma.user.findUnique({
        where: { email: email },
      })
    } catch (error) {
      throw new Error('User not found')
    }

    const user = new User(findUser.id, findUser.name, email, findUser.password)

    return user
  }

  async delete(id: string): Promise<User> {
    const findUser = await this.prisma.user.findUnique({
      where: { id },
    })

    if (findUser == undefined) {
      throw new Error(`User not found`)
    }

    const deleteUser = await this.prisma.user.delete({
      where: { id },
    })

    const user = new User(
      deleteUser.id,
      deleteUser.name,
      deleteUser.email,
      deleteUser.password,
    )

    return user
  }
}

export const UserRepositoryProvider = {
  provide: UserRepositoryInterface,
  useClass: UserRepository,
}
