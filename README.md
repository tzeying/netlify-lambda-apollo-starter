# Starter for deploying Apollo GraphQL Server to Netlify Functions

- Up-to-date starter repo for deploying Apollo to Netlify Functions ([Reference](https://www.apollographql.com/docs/apollo-server/deployment/netlify/))

- Includes [fix](https://github.com/netlify/netlify-lambda/issues/112) for bundling node modules for compatibility with Firebase SDK or other native modules ([Reference](https://github.com/netlify/netlify-lambda#webpack-configuration))

- GraphQL Playground available at `localhost:9000/graphql` or `/.netlify/functions/graphql` when hosted on Netlify

- Functions found in `src/lambda` and builds to `built-lambda`
