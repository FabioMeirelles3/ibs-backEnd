export class User {
  private _id: string
  private _name: string
  private _email: string
  private _password: string
  private _active?: boolean = true

  constructor(id: string, name: string, email: string, password: string) {
    this._id = id
    this._name = name
    this._email = email
    this._password = password
    this.validate()
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get email() {
    return this._email
  }

  get password() {
    return this._password
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  changeEmail(email: string) {
    this._email = email
    this.validate()
  }

  changePassword(password: string) {
    this._password = password
    this.validate()
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
    if (this._email.length === 0) {
      throw new Error('Email is required')
    }
    if (this.password.length === 0) {
      throw new Error('Password is required')
    }
  }
}
