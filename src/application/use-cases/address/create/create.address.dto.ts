export class InputCreateAddressDto {
  zipCode: string
  street: string
  number: number
  district: string
  state: string
  city: string
  customerId: string
  complement?: string
}

export class OutputCreateAddressDto {
  id: string
  zipCode: string
  street: string
  number: number
  district: string
  state: string
  city: string
  customerId: string
  complement?: string
}
