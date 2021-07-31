import Hammer from 'hammerjs';
import { SvelteAction } from './model';

const events: string[] = [
  'tap'
];

export default function (node: HTMLElement, options?: RecognizerOptions): SvelteAction {
  const hammer = new Hammer(node);
  hammer.get('tap').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, { detail: ev })));
  }
  return {
    update (opt) {
      hammer.get('tap').set(opt);
    },
    destroy () {
      for (const event of events) {
        hammer.off(event);
      }
    },
  };
}