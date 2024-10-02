export interface InputFindAllCustomerDto { }

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

type Customer = {
  id: string
  name: string
  gender: string
  birthDate: string
  maritialStatus: string
  active: boolean
  addresses: Address[]
}

export interface OutputFindAllCustomerDto {
  customers: Customer[]
}
