
interface methodsHTTP {
  GET: HttpServiceImplementation,
  POST: HttpServiceImplementation,
  PUT: HttpServiceImplementation,
  DELETE: HttpServiceImplementation  
}

// Implementation
export interface HttpServiceImplementation {
  GET: <method>() => Promise<any>,
  POST: <method>() => Promise<any>,
  PUT: <method>() => Promise<any>,
  DELETE: <method>() => Promise<any>,
}

// Proxy to implementation
export abstract class HttpProxy implements HttpServiceImplementation {
  private realMethods!: methodsHTTP

  constructor(implementation: methodsHTTP) {
    this.realMethods = implementation
  }

  public abstract fetchData(): Promise<any>
}