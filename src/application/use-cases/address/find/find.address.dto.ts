export interface InputFindAddressDto {
  id: string
}

export interface OutputFindAddressDto {
  id: string
  zipCode: string
  street: string
  number: number
  complement: string
  district: string
  state: string
  city: string
  customerId: string
}
