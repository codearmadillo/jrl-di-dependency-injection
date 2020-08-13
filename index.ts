import 'reflect-metadata';
import { Injector } from './injector';
import { Classes } from './classes';

/** Run */
const client = Injector.resolve<Classes.Client>(Classes.Client);
const engine = Injector.resolve<Classes.Engine>(Classes.Engine);

/** Debug */
engine.add('Hey!');
console.log(client.list());