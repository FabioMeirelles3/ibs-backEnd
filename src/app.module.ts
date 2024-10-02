import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './infrastructure/auth/auth.module'
import { UserController } from './infrastructure/controllers/user.controller'
import { AuthenticateController } from './infrastructure/controllers/authenticate.controller'
import { CustomerController } from './infrastructure/controllers/customer.controller'
import { PrismaService } from './infrastructure/database/prisma.service'
import { JwtServiceProvider } from './infrastructure/auth/jwt.service'
import { BcryptServiceProvider } from './infrastructure/auth/bcrypt.service'
import { AuthenticationUseCaseProvider } from './application/use-cases/auth/authenticate.user.usecase'
import { UserRepositoryProvider } from './infrastructure/repository/user.repository'
import { CreateUserUseCaseProvider } from './application/use-cases/user/create/create.user.usecase'
import { FindUserUseCaseProvider } from './application/use-cases/user/find/find.user.usecase'
import { FindAllUserUseCaseProvider } from './application/use-cases/user/findAll/findAll.user.usecase'
import { UpdateUserUseCaseProvider } from './application/use-cases/user/update/update.user.usecase'
import { FindEmailUserUseCaseProvider } from './application/use-cases/user/findEmail/findEmail.user.usecase'
import { CreateCustomerUseCaseProvider } from './application/use-cases/customer/create/create.customer.usecase'
import { FindCustomerUseCaseProvider } from './application/use-cases/customer/find/find.customer.usecase'
import { FindAllCustomerUseCaseProvider } from './application/use-cases/customer/findAll/findAll.customer.usecase'
import { UpdateCustomerUseCaseProvider } from './application/use-cases/customer/update/update.customer.usecase'
import { CustomerRepositoryProvider } from './infrastructure/repository/customer.repository'
import { AddressController } from './infrastructure/controllers/address.controller'
import { AddressRepositoryProvider } from './infrastructure/repository/address.repository'
import { CreateAddressUseCaseProvider } from './application/use-cases/address/create/create.address.usecase'
import { FindAddressUseCaseProvider } from './application/use-cases/address/find/find.address.usecase'
import { FindAllAddressUseCaseProvider } from './application/use-cases/address/findAll/findAll.address.usecase'
import { UpdateAddressUseCaseProvider } from './application/use-cases/address/update/update.address.usecase'
import { FindCustomerAddressUseCaseProvider } from './application/use-cases/address/findCostumer/findCustomer.address.usecase'
import { DeleteAddressUseCaseProvider } from './application/use-cases/address/delete/delete.address.usecase'
import { DeleteUserUseCaseProvider } from './application/use-cases/user/delete/delete.user.usecase'
import { DeleteCustomerUseCaseProvider } from './application/use-cases/customer/delete/delete.customer.usecase'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    AuthenticateController,
    CustomerController,
    UserController,
    AddressController,
  ],
  providers: [
    PrismaService,
    JwtServiceProvider,
    BcryptServiceProvider,
    UserRepositoryProvider,
    AuthenticationUseCaseProvider,
    CreateUserUseCaseProvider,
    FindUserUseCaseProvider,
    FindAllUserUseCaseProvider,
    UpdateUserUseCaseProvider,
    FindEmailUserUseCaseProvider,
    DeleteUserUseCaseProvider,
    CustomerRepositoryProvider,
    CreateCustomerUseCaseProvider,
    FindCustomerUseCaseProvider,
    FindAllCustomerUseCaseProvider,
    UpdateCustomerUseCaseProvider,
    DeleteCustomerUseCaseProvider,
    AddressRepositoryProvider,
    CreateAddressUseCaseProvider,
    FindAddressUseCaseProvider,
    FindAllAddressUseCaseProvider,
    FindCustomerAddressUseCaseProvider,
    UpdateAddressUseCaseProvider,
    DeleteAddressUseCaseProvider,
  ],
})
export class AppModule { }
