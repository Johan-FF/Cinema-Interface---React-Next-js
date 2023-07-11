import Cookies from "js-cookie"
import { KEY_USER_TOKEN } from "../environment"

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
      const userValue = Cookies.get(KEY_USER_TOKEN)
      if(userValue){
        const userObject = JSON.parse(userValue)
        this.instance.name = userObject.clientName
        this.instance.rol = userObject.clientRol
        this.instance.id = userObject.clientId
        this.instance.idMultiplex = userObject.clientIdMultiplex
        this.instance.pointsSnack = userObject.clientPointsSnack
        this.instance.pointsTicket = userObject.clientPointsTicket
      }
    }
    return Account.instance
  }

  private updateCookies(){
    const userValue = Cookies.get(KEY_USER_TOKEN)
    if(userValue){
      const userObject = JSON.parse(userValue)
      userObject.clientName = Account.instance.name
      userObject.clientRol = Account.instance.rol
      userObject.clientId = Account.instance.id
      userObject.clientIdMultiplex = Account.instance.idMultiplex
      userObject.clientPointsSnack = Account.instance.pointsSnack
      userObject.clientPointsTicket = Account.instance.pointsTicket
      Cookies.set(
        KEY_USER_TOKEN,
        JSON.stringify(userObject),
        { expires: 1 }
      )
    }
  }

  public getName(): string {
    return this.name
  }

  public setName(newName: string): void {
    this.name = newName
    this.updateCookies()
  }

  public getRol(): string {
    return this.rol
  }

  public setRol(newRol: string): void {
    this.rol = newRol
    this.updateCookies()
  }

  public getID(): string {
    return this.id
  }

  public setID(newID: string): void {
    this.id = newID
    this.updateCookies()
  }

  public getIDMultiplex(): string {
    return this.idMultiplex
  }

  public setIDMultiplex(newID: string): void {
    this.idMultiplex = newID
    this.updateCookies()
  }

  public getPointsTicket(): string {
    return this.pointsTicket
  }

  public setPointsTicket(newPoints: string): void {
    this.pointsTicket = newPoints
    this.updateCookies()
  }

  public getPointsSnack(): string {
    return this.pointsSnack
  }

  public setPointsSnack(newPoints: string): void {
    this.pointsSnack = newPoints
    this.updateCookies()
  }
}