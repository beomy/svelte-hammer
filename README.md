Hammer.js wrapper for Svelte to support some operation in the mobile.

This is directive of svelte for Hammer.js 2.x.

This is easy for using Hammer.js. It just use directive of svelte.

# Install

This library support Svelte >= 3.0. And use Hammer.js > 2.x.

## NPM

```
npm install svelte-hammer
or
yarn add svelte-hammer
```

# rollup config

When this library use in rollup, you need some config:

```js
// rollup.config.js
export default {
  // ...
  plugins: [
    // ...
    commonjs({
			namedExports: { 'svelte-hammer': ['pan', 'pinch', 'press', 'rotate', 'swipe', 'tap'] }
		}),
    // ...
  ]
}
```

# Usage

See [Hammer.js documentation](http://hammerjs.github.io/getting-started/) for all available events.

```html
<script>
  import { pan } from 'svelte-hammer'
</script>
<div
  use:pan
  ...
>
</div>
```

```html
<script>
  import svelteHammer from 'svelte-hammer'
</script>
<div
  use:svelteHammer.pan
  ...
>
</div>
```

You take choose one.

## Pan

```html
<script>
  import { pan } from 'svelte-hammer'
</script>
<div
  use:pan
  on:panstart={() => /* Pan Start */}
  on:panmove={() => /* Pan Move */}
  on:panend={() => /* Pan End */}
>
</div>
```

### Directives

- `on:pan`: Detect all pan event
- `on:panstart`: Detect start pan event
- `on:panmove`: Detect move pan event
- `on:panend`: Detect end pan event
- `on:pancancel`: Detect cancel pan event
- `on:panleft`: Detect left pan event
- `on:panright`: Detect right pan event
- `on:panup`: Detect up pan event
- `on:pandown`: Detect down pan event

## Pinch

```html
<script>
  import { pinch } from 'svelte-hammer'
</script>
<div
  use:pinch
  on:pinchstart={() => /* Pinch Start */}
  on:pinchmove={() => /* Pinch Move */}
  on:pinchend={() => /* Pinch End */}
>
</div>
```

### Directives

- `on:pinch`: Detect all pinch event
- `on:pinchstart`: Detect start pinch event
- `on:pinchmove`: Detect move pinch event
- `on:pinchend`: Detect end pinch event
- `on:pinchcancel`: Detect cancel pinch event
- `on:pinchin`: Detect in pinch event
- `on:pinchout`: Detect out pinch event

## Press

```html
<script>
  import { press } from 'svelte-hammer'
</script>
<div
  use:press
  on:press={() => /* Press */}
  on:pressup={() => /* Press Up */}
>
</div>
```

### Directives

- `on:press`: Detect press event
- `on:pressup`: Detect up press event

## Rotate

```html
<script>
  import { rotate } from 'svelte-hammer'
</script>
<div
  use:rotate
  on:rotatestart={() => /* Rotate Start */}
  on:rotatemove={() => /* Rotate Move */}
  on:rotateend={() => /* Rotate End */}
>
</div>
```

### Directives

- `on:rotate`: Detect all rotate event
- `on:rotatestart`: Detect start rotate event
- `on:rotatemove`: Detect move rotate event
- `on:rotateend`: Detect end rotate event
- `on:rotatecancel`: Detect cancel rotate event

## Swipe

```html
<script>
  import { swipe } from 'svelte-hammer'
</script>
<div
  use:swipe
  on:swipeleft={(ev) => /* Swipe Left */}
  on:swiperight={(ev) => /* Swipe Right */}
  on:swipeup={(ev) => /* Swipe Up */}
  on:swipedown={(ev) => /* Swipe Down */}
>
</div>
```

### Directives

- `on:swipe`: Detect all swipe event
- `on:swipeleft`: Detect left swipe event
- `on:swiperight`: Detect right swipe event
- `on:swipeup`: Detect up swipe event
- `on:swipedown`: Detect down swipe event

## Tap

```html
<script>
  import { tap } from 'svelte-hammer'
</script>
<div
  use:tap
  on:tap={() => /* Tap */}
>
</div>
```

### Directives

- `on:tap`: Detect tap event

## Using Custom Options

Using custom recognizer options such as `direction` and `threshold`:

```html
<script>
  import { Hammer, swipe } from 'svelte-hammer'
</script>
<div
  use:swipe={{ direction: Hammer.DIRECTION_ALL }}
  on:swipeleft={(ev) => /* Swipe Left */}
  on:swiperight={(ev) => /* Swipe Right */}
  on:swipeup={(ev) => /* Swipe Up */}
  on:swipedown={(ev) => /* Swipe Down */}
>
</div>
```

All gestures same usage.

# License
MIT

# Author
[Hyo Bum Lee](https://beomy.github.io/)
