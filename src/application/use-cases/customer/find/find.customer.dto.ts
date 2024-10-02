export interface InputFindCustomerDto {
  id: string
}
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

export interface OutputFindCustomerDto {
  id: string
  name: string
  gender: string
  birthDate: string
  maritialStatus: string
  active: boolean
  addresses: Address[]
}
