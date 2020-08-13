export namespace Interfaces {
  export interface Type<T> {
    new(...args: any[]) : T;
  }
  export interface IService {
    add(value : string) : void;
  }
  export interface IClient {
    
  }
  export interface IEngine {
    
  }
}