# Common Micro-Frontend Setups Using Module Federation Plugin

## Gotchas:

- The Module Federation plugin exports module names as globals. Therefore, they should be different from mounting element IDs. For example, `<div id="cart" />` and `new ModuleFederationPlugin({ name: 'cart' })` will conflict with each other because the element ID is also global.
