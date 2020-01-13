import Hammer from 'hammerjs';

const events: Array<string> = [
  'rotate',
  'rotatestart',
  'rotatemove',
  'rotateend',
  'rotatecancel'
];

export default function (node: HTMLElement, options: RecognizerOptions): void {
  const hammer = new Hammer(node);
  hammer.get('rotate').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, ev)));
  }
}