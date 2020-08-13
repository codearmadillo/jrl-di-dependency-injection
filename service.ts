@Dependency()
class Service implements IService {
  private list : string[] = [];
  get() : string[] {
    return this.list;
  }
  add(value : string) : void {
    this.list.push(value);
  }
}