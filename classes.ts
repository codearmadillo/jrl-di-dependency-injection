import { Interfaces } from './interfaces';
import { Decorators } from './decorators';
import { Injector } from './injector';
import { Subject, Observable } from 'rxjs';

export namespace Classes {
  @Decorators.Dependency()
  export class NestedService implements Interfaces.IService {
    private readonly trace : string[] = [];
    private readonly listSubject : Subject<string[]> = new Subject();
    public readonly list : Observable<string[]> = this.listSubject.asObservable();
    add(value : string) : void {
      console.log(`NestedService: Adding '${value}'`);
      this.trace.push(value);
      this.listSubject.next(this.trace);
    }
    constructor() {
      this.list.subscribe((list) => {
        console.log(`NestedService: Value added`);
      });
    }
  }
  @Decorators.Dependency()
  export class Service implements Interfaces.IService {
    private readonly trace : string[] = [];
    private readonly listSubject : Subject<string[]> = new Subject();
    public readonly list : Observable<string[]> = this.listSubject.asObservable();
    add(value : string) : void {
      console.log(`Service: Adding '${value}'`);
      this.trace.push(value);
      this.listSubject.next(this.trace);
    }
    constructor(
      public nestedService : NestedService
    ) {
      this.list.subscribe((list) => {
        console.log(`Service: Value added`);
      });
      this.nestedService.list.subscribe((list) => {
        console.log(`Service: Value added to NestedService`)
      }); 
    }
  }
  @Decorators.Dependency()
  export class Client implements Interfaces.IClient {
    constructor(
      public service : Service
    ) {
      this.service.list.subscribe((list) => {
        console.log(`Client: Value added to Service`);
      });
      this.service.nestedService.list.subscribe((list) => {
        console.log(`Client: Value added to Service.NestedService`)
      });
    }
  }
  @Decorators.Dependency()
  export class Engine implements Interfaces.IEngine {
    constructor(
      public service : Service
    ) {
      this.service.list.subscribe((list) => {
        console.log(`Engine: Value added to Service`);
      });
      this.service.nestedService.list.subscribe((list) => {
        console.log(`Engine: Value added to Service.NestedService`)
      });
    }
  }
}
