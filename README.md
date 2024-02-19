# Build-time micro frontend demo with Module Federation Webpack plugin. React + Svelte.

Routing (in-memory routers in the remote apps) and authentication state are being synced with host via PubSub.

[Live demo](https://djuyc1jmeh0tr.cloudfront.net)

### Run in dev mode

From the root folder:

```
npm install
npm start
```

The host application is running locally on port `8080`.

### Gotchas

The Module Federation plugin exports a federated module name as a global variable. This can clash with HTML element IDs, which are also attached to the global object, leading to the `fn is not a function...` error, e.g. https://github.com/module-federation/module-federation-examples/issues/322.

### Useful resources

[Module Federation official github page](https://github.com/module-federation)

[Module federation docs](https://module-federation.io/docs/en/mf-docs/0.2/getting-started/)

["Practical Module Federation" book](https://module-federation.myshopify.com/products/practical-module-federation)

[A curated list of resources about Micro frontends grouped by types](https://github.com/billyjov/microfrontend-resources)

[Other examples, including SSR](https://github.com/module-federation/module-federation-examples)
