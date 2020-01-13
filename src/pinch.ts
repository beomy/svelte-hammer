import Hammer from 'hammerjs';

const events: Array<string> = [
  'pinch',
  'pinchstart',
  'pinchmove',
  'pinchend',
  'pinchcancel',
  'pinchin',
  'pinchout'
];

export default function (node: HTMLElement, options: RecognizerOptions): void {
  const hammer = new Hammer(node);
  hammer.get('pinch').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, ev)));
  }
}