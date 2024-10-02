export interface InputFindAllUserDto {}

type User = {
  id: string
  name: string
  email: string
}

export interface OutputFindAllUserDto {
  users: User[]
}
