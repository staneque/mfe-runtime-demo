# Build-time micro frontend demo with Module Federation Webpack plugin. React + Svelte.

Routing (in-memory routers in the remote apps) and authentication state are being synced with host via PubSub.

[Live demo](https://mfe-dcq.pages.dev)

### Run in dev mode

From the root folder:

```
npm install
npm start
```

The host application is running locally on port `8080`.

### Gotchas

#### Module naming:

The Module Federation plugin exports a federated module name as a global variable. This can clash with HTML element IDs, which are also attached to the global object, leading to the `fn is not a function...` error, e.g. https://github.com/module-federation/module-federation-examples/issues/322.

#### Module sharing changes tree-shaking rules:

[Think twice before sharing a dependency](https://medium.com/@marvusm.mmi/webpack-module-federation-think-twice-before-sharing-a-dependency-18b3b0e352cb)

#### Styles clashing

Flowbite styles (e.g. inputs) are clashing with @material-tailwind/react, so the official Flowbite Tailwind config is not included in the Dashboard app, which is probably not an option, if you want to use other Flowbite components. In general I found Tailwind based component libraries do not work well when used together in microfrontends.

See also: [The Problem of Using TailwindCSS in Module Federation](https://malcolmkee.com/blog/using-tailwindcss-with-module-federation/#a-new-solution)

### Useful resources

[Module Federation official github page](https://github.com/module-federation)

[Module federation docs](https://module-federation.io/docs/en/mf-docs/0.2/getting-started/)

["Practical Module Federation" book](https://module-federation.myshopify.com/products/practical-module-federation)

[A curated list of resources about Micro frontends grouped by types](https://github.com/billyjov/microfrontend-resources)

[Other examples, including SSR](https://github.com/module-federation/module-federation-examples)
