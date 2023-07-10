export default class Account {
  private static instance: Account
  private id: string = ''
  private name: string = ''
  private rol: string = ''
  private idMultiplex: string = ''
  private pointsTicket: string = ''
  private pointsSnack: string = ''

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

  public getPointsTicket(): string {
    return this.pointsTicket
  }

  public setPointsTicket(newPoints: string): void {
    this.pointsTicket = newPoints
  }

  public getPointsSnack(): string {
    return this.pointsSnack
  }

  public setPointsSnack(newPoints: string): void {
    this.pointsTicket = newPoints
  }
}