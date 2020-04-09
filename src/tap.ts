import Hammer from 'hammerjs';

const events: Array<string> = [
  'tap'
];

export default function (node: HTMLElement, options: RecognizerOptions): void {
  const hammer = new Hammer(node);
  hammer.get('tap').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, { detail: ev })));
  }
}