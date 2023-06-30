export default class Account {
  private static instance: Account
  private name: string = ''
  private rol: string = ''

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
}