
# renderable-component

A component for specifying what to render for an object in the whirlibulf game engine.

## Installation

    $ component install whirlibulf/renderable-component

## Usage

The component ID is `renderable`.

Register the component:

    var component = require('renderable-component');
    game.addComponent(new component());

The options object for this component:

    {
      renderable: 'rectangle',
      visible: true
    }

### renderable

The `renderable` property should be a string.

Its value depends on the rendering system that you are using, and which types of render objects it supports.

This property is required.

### visible

The `visible` property should be a boolean.

The renderer will not draw an object if it is not visible.

The default value is `true`.

## License

  MIT
