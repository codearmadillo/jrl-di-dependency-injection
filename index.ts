import 'reflect-metadata';
import { Injector } from './injector';
import { Classes } from './classes';

/** Run */
const client = Injector.resolve<Classes.Client>(Classes.Client);
const engine = Injector.resolve<Classes.Engine>(Classes.Engine);

/** First level */
client.service.add('Hello');
console.log(engine.service.get());

/** Second level */
engine.service.nestedService.add('World!');
console.log(client.service.nestedService.get());