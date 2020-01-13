import Hammer from 'hammerjs';

const events: Array<string> = [
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

export default function (node: HTMLElement, options: RecognizerOptions) {
  const hammer = new Hammer(node);
  hammer.get('swipe').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, ev)));
  }
}