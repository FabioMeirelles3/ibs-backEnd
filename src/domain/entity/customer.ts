import type Address from './address'

export class Customer {
  private _id: string
  private _name: string
  private _gender: string
  private _birthDate: string
  private _maritialStatus: string
  private _active: boolean = true
  private _addresses: Address[] = []

  constructor(
    id: string,
    name: string,
    gender: string,
    birthDate: string,
    maritialStatus: string,
    addresses?: Address[],
  ) {
    this._id = id
    this._name = name
    this._gender = gender
    this._birthDate = birthDate
    this._maritialStatus = maritialStatus
    this._addresses = addresses
    this.validate()
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get gender() {
    return this._gender
  }

  get birthDate() {
    return this._birthDate
  }

  get maritialStatus() {
    return this._maritialStatus
  }

  getPublicAddresses() {
    return this._addresses.map((address) => ({
      id: address.id,
      zipCode: address.zipCode,
      street: address.street,
      number: address.number,
      district: address.district,
      state: address.state,
      city: address.city,
      customerId: address.customerId,
      complement: address.complement,
    }))
  }

  changeName(name: string) {
    this._name = name
  }

  changeGender(gender: string) {
    this._gender = gender
  }

  changeBirthDate(birthDate: string) {
    this._birthDate = birthDate
  }

  changeMaritialStatus(maritialStatus: string) {
    this._maritialStatus = maritialStatus
  }

  isActive(): boolean {
    return this._active
  }

  activate() {
    this._active = true
  }

  deactivate() {
    this._active = false
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
    if (this._gender.length === 0) {
      throw new Error('Gender is required')
    }
    if (this._birthDate.length === 0) {
      throw new Error('BirthDate is required')
    }
    if (this._maritialStatus.length === 0) {
      throw new Error('Maritial Status is required')
    }
  }
}
