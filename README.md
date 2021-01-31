# NextJS TypeScript Code Test Starter with ESLint/Prettier

A typescript template with nextjs, eslint, and prettier set up to run in VSCode.
It pulls data from a graphql endpoint provided for a specific code test. It also includes a proxy to get around cors issues.

## How to use

Fork/clone copy... 

Install
```
npm i
```
Run the Proxy. 

You probably want to do this in a separate console.
```
npm run proxy
```
Generate Schema (optional)

This is optional but if you make changes to the data pulled by Apollo you probably will want to do this.
```
npm run generate
```

Run it and point your browser at localhost:3000

```
npm run dev
```


Debugging is enabled for VSCode just run the Next:Chrome to debug


This was built from my [Next SPA Starter](https://github.com/wuntusk/next-spa-starter)

## Additions to the SPA Starter

A number of things got added to make this thing go but here's some of the more relevant stuff.

### Styled Components
```
npm install styled-components 
npm install @types/styled-components --save-dev
```

### lodash
```
npm install lodash
npm install @types/lodash --save-dev
```
### Apollo 

```
npm install local-cors-proxy --save-dev
npm install graphql graphql-tag @apollo/client
npm install apollo graphql-cli @graphql-cli/codegen @graphql-codegen/schema-ast --save-dev
```

### New Scripts
```
    "proxy": "lcp --proxyUrl https://welbi.org",
    "get-schema": "graphql codegen"
    "apollo:generate": "apollo codegen:generate --excludes=node-modules/* --target typescript --tagName gql --outputFlat src/apollo/generated --passthroughCustomScalars",
    "generate": "npm run get-schema && npm run apollo:generate"
```