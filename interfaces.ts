export namespace Interfaces {
  export interface Type<T> {
    new(...args: any[]) : T;
  }
  export interface IService {
    get() : string[];
  }
  export interface IClient {
    
  }
  export interface IEngine {
    
  }
}