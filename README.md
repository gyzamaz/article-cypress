#### vuejs downloading a list of articles from a local database in a .json file and e2e tests from cypress.io

**first step:** run serve api (_db.json_)

`npm run api`

**second step:** run the vue app

`npm run serve`

**Running tests**

2 options each with 2 variants.

1. **Headless mode**

`npm run test:e2e -- --headless`

`npm run test:e2e -- --headless --url http://locahost:8080`


2. **Select test mode**

`npm run test:e2e`

`npm run test:e2e -- --url http://locahost:8080`

<a href="mailto:konrad@kadzielawa.dev">konrad@kadzielawa.dev</a>
