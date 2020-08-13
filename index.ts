import 'reflect-metadata';
import { Injector } from './injector';
import { Classes } from './classes';

/** Classes */
const client = Injector.resolve<Classes.Client>(Classes.Client);
const engine = Injector.resolve<Classes.Engine>(Classes.Engine);

/** Very ugly but functional debug */
let radioValue = null;
const getValues = () : { value: string, target: 'client' | 'engine' } => {
  /** value */
  const value = (document.getElementById('word') as HTMLInputElement).value;
  if(!value || value === "" || !radioValue) return null;
  return {
    value: value as any,
    target: radioValue
  }
}
document.querySelectorAll("[name=\"target\"").forEach((radio : HTMLInputElement) => {
  radio.addEventListener('change', () => {
    radioValue = radio.value;
  });
});
document.getElementById('addWordToService').addEventListener('click', () => {
  const values = getValues();
  if(!values) return;
  if(values.target === 'client') {
    client.service.add(values.value);
  } else {
    engine.service.add(values.value);
  }
});
document.getElementById('addWordToNestedService').addEventListener('click', () => {
  const values = getValues();
  if(!values) return;
  if(values.target === 'client') {
    client.service.nestedService.add(values.value);
  } else {
    engine.service.nestedService.add(values.value);
  }
});