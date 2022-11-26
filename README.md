# Icejs-SSR

Example on how to use SSR with Ice.js

### Deploying to Netlify

> You need to remove from dist, where ice build saves output, all the HTML files generated.

**Build and bundle your application**

```shell
ice build
```

**Deploy**

```shell
netlify deploy --prod
```