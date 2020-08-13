import { Interfaces } from './interfaces';

export namespace Decorators {
  /**
   * The Dependency decorators allows 'reflect-metadata' to read types of dependencies injected into the class that is marked with this decorator. That way the injector knows what dependency to inject
   * 
   * The injected dependency (e.g. Service or Controller) doesn't need to be marked with the decorator at all if there is nothing that is injected into it. However it is a good practice to do so.
   * */
  export const Dependency = () => {
    return (target : Interfaces.Type<any>) => {
      
    }
  }
}