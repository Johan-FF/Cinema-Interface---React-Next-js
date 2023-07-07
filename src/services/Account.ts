export default class Account {
  private static instance: Account
  private id: string = ''
  private name: string = ''
  private rol: string = ''
  private idMultiplex: string = ''
  private token: string = ''

  private constructor() {}

  public static getInstance(): Account {
    if (!Account.instance) {
      Account.instance = new Account()
    }
    return Account.instance
  }

  public getName(): string {
    return this.name
  }

  public setName(newName: string): void {
    this.name = newName
  }

  public getRol(): string {
    return this.rol
  }

  public setRol(newRol: string): void {
    this.rol = newRol
  }

  public getID(): string {
    return this.id
  }

  public setID(newID: string): void {
    this.id = newID
  }

  public getIDMultiplex(): string {
    return this.idMultiplex
  }

  public setIDMultiplex(newID: string): void {
    this.idMultiplex = newID
  }

  public getToken(): string {
    return this.token
  }

  public setToken(newToken: string): void {
    this.token = newToken
  }
}