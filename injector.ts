import { Types } from './types';
import { Interfaces } from './interfaces';

export const Injector = new class {
  private readonly container : Map<Types.DependencyToken, any> = new Map();
  resolve<T>(target : Interfaces.Type<any>) : T {
    /** Check container */
    if(this.container.has(target.name)) {
      return this.container.get(target.name);
    }
    /** Get initialization tokens - dependencies */
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    /** Switch them for actual injections */
    const injections = tokens.map((token) => Injector.resolve<any>(token));
    /** Create new instance of class initiated with resolved injections */
    const instance : T = new target(...injections);
    /** Store instance */
    this.container.set(
      target.name,
      instance
    );
    /** Return newly created instance */
    return instance;
  }
}