import { HttpProxy } from "./HttpProxy"
import { typeModel } from "../types/Types"

// Abstraction
export abstract class HttpServiceAbstraction {
  protected fetchImplementation!: HttpProxy

  constructor(implementation: HttpProxy){
    this.fetchImplementation = implementation
  }

  public abstract fetch(model: typeModel): Promise<any>
}