export class InputAuthenticateUserDto {
  email: string
  password: string
}

export class OutputAuthenticateUserDto {
  access_token: string
}
