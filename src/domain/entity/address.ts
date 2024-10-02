export default class Address {
  private _id: string
  private _zipCode: string
  private _street: string
  private _number: number
  private _district: string
  private _state: string
  private _city: string
  private _customerId: string
  private _complement?: string

  constructor(
    id: string,
    zipCode: string,
    street: string,
    number: number,
    district: string,
    state: string,
    city: string,
    customerId: string,
    complement?: string,
  ) {
    this._id = id
    this._zipCode = zipCode
    this._street = street
    this._number = number
    this._district = district
    this._state = state
    this._city = city
    this._customerId = customerId
    this._complement = complement

    this.validate()
  }

  get id(): string {
    return this._id
  }

  get zipCode(): string {
    return this._zipCode
  }

  get street(): string {
    return this._street
  }

  get number(): number {
    return this._number
  }

  get district(): string {
    return this._district
  }

  get state(): string {
    return this._state
  }

  get city(): string {
    return this._city
  }

  get customerId(): string {
    return this._customerId
  }

  get complement(): string {
    return this._complement
  }

  changeZipCode(zipCode: string) {
    this._zipCode = zipCode
  }

  changeStreet(street: string) {
    this._street = street
  }

  changeNumber(number: number) {
    this._number = number
  }

  changeDistrict(district: string) {
    this._district = district
  }

  changeState(state: string) {
    this._state = state
  }

  changeCity(city: string) {
    this._city = city
  }

  changeComplement(complement: string) {
    this._complement = complement
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
    if (this._zipCode.length === 0) {
      throw new Error('Zip Code is required')
    }
    if (this._street.length === 0) {
      throw new Error('Street is required')
    }
    if (this._number <= 0) {
      throw new Error('Number is required')
    }
    if (this._district.length === 0) {
      throw new Error('District is required')
    }
    if (this._state.length === 0) {
      throw new Error('State is required')
    }
    if (this._city.length === 0) {
      throw new Error('City is required')
    }
    if (this._customerId.length === 0) {
      throw new Error('CustomerId is required')
    }
  }
}
