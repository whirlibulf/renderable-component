
# renderable-component

A component for specifying what to render for an object in the whirlibulf game engine.

## Installation

    $ component install whirlibulf/renderable-component

## Usage

Register the component:

    game.use('renderable', require('renderable-component'));

The options object for this component:

    {
      renderable: 'rectangle',
      visible: true,
      zIndex: 0
    }

### renderable

The `renderable` property should be a string.

Its value depends on the rendering system that you are using, and which types of render objects it supports.

This property is required.

### visible

The `visible` property should be a boolean.

The renderer will not draw an object if it is not visible.

The default value is `true`.

### zIndex

The `zIndex` property should be a number.

The renderer will draw objects in the order sorted by zIndex, with higher zIndex objects appearing in front of lower zIndex objects.

The default value is 0.

## License

  MIT
