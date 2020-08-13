import { Interfaces } from './interfaces';
import { Decorators } from './decorators';
import { Injector } from './injector';

export namespace Classes {
  @Decorators.Dependency()
  export class NestedService implements Interfaces.IService {
    private list : string[] = [];
    get() : string[] {
      return this.list;
    }
    add(value : string) : void {
      this.list.push(value);
    }
  }
  @Decorators.Dependency()
  export class Service implements Interfaces.IService {
    constructor(
      public nestedService : NestedService
    ) { }
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
      public service : Service
    ) { }
  }
  @Decorators.Dependency()
  export class Engine implements Interfaces.IEngine {
    constructor(
      public service : Service
    ) { }
  }
}
