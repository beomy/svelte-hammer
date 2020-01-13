import Hammer from 'hammerjs';

const events: Array<string> = [
  'swipe',
  'swipeleft',
  'swiperight',
  'swipeup',
  'swipedown'
];

export default function (node: HTMLElement, options: RecognizerOptions) {
  const hammer = new Hammer(node);
  hammer.get('swipe').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, ev)));
  }
}