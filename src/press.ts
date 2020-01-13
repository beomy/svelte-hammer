import Hammer from 'hammerjs';

const events: Array<string> = [
  'press',
  'pressup'
];

export default function (node: HTMLElement, options: RecognizerOptions): void {
  const hammer = new Hammer(node);
  hammer.get('press').set(options);
  for (const event of events) {
    hammer.on(event, (ev: any) => node.dispatchEvent(new CustomEvent(event, ev)));
  }
}