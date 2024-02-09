# Build-time micro frontend architecture examples with Module Federation Webpack plugin

Each top-level folder contains a separate project. Running `npm install` from there will also install dependencies for all the related apps in the subfolders. So, you can launch the desired project like this:

```
cd shop
npm install
npm start
```

The host application is running on port 8080. See the webpack output in your console for additional information.

### Gotchas

The Module Federation plugin exports a federated module name as a global variable. This can clash with HTML element IDs, which are also attached to the global object, leading to the `fn is not a function...` error, e.g. https://github.com/module-federation/module-federation-examples/issues/322.

### Useful resources

[Module Federation official github page](https://github.com/module-federation)

[Module federation docs](https://module-federation.io/docs/en/mf-docs/0.2/getting-started/)

["Practical Module Federation" book](https://module-federation.myshopify.com/products/practical-module-federation)

[A curated list of resources about Micro frontends grouped by types](https://github.com/billyjov/microfrontend-resources)

[Other examples, including SSR](https://github.com/module-federation/module-federation-examples)
