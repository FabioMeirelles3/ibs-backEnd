export interface InputDeleteAddressDto {
  id: string
}

export interface OutputDeleteAddressDto {
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
