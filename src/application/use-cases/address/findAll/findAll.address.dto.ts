export interface InputFindAllAddressDto { }

type Address = {
  id: string
  zipCode: string
  street: string
  number: number
  district: string
  state: string
  city: string
  customerId: string
  complement: string
}

export interface OutputFindAllAddressDto {
  addresses: Address[]
}
