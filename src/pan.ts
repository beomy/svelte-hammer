import Hammer from 'hammerjs';
import { SvelteAction } from './model';

const events: string[] = [
  'pan',
  'panstart',
  'panmove',
  'panend',
  'pancancel',
  'panleft',
  'panright',
  'panup',
  'pandown'
];

export default function (node: HTMLElement, options?: RecognizerOptions): SvelteAction {
  const hammer = new Hammer(node);
  hammer.get('pan').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, { detail: ev })));
  }
  return {
    update (opt) {
      hammer.get('pan').set(opt);
    },
    destroy () {
      for (const event of events) {
        hammer.off(event);
      }
    },
  };
}