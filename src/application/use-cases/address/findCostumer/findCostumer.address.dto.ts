export interface InputFindCustomerAddressDto {
  customerId: string
}
type Address = {
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

export interface OutputFindCustomerAddressDto {
  addresses: Address[]
}
