import { Interfaces } from './interfaces';
import { Decorators } from './decorators';
import { Injector } from './injector';

export namespace Classes {
  export class Service implements Interfaces.IService {
    private list : string[] = [];
    get() : string[] {
      return this.list;
    }
    add(value : string) : void {
      this.list.push(value);
    }
  }
  @Decorators.Dependency()
  export class Client implements Interfaces.IClient {
    constructor(
      private service : Service
    ) { }
    list() : string[] {
      return this.service.get();
    }
    add(value : string) : void {
      this.service.add(value)
    }
  }
  @Decorators.Dependency()
  export class Engine implements Interfaces.IEngine {
    constructor(
      private service : Service
    ) { }
    list() : string[] {
      return this.service.get();
    }
    add(value : string) : void {
      this.service.add(value)
    }
  }
}
