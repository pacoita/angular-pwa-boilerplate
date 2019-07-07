# AngularPwa

A demo Angular PWA using `performance` and `freshness`caching stretegies.

The APIs used in the demo are:

- https://icanhazdadjoke.com/api
- https://www.worldtradingdata.com/

## Update npm libraries

First install or update your local project's npm dependencies:

```npm install```

## Run a production build

Exceute the following command for a produciton build:

``` ng build --prod ```

## Serve the application

As we cannot use `ne serve` with servie workers, you need to run a web server like [http server](https://www.npmjs.com/package/http-server) or the [web server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) Chrome extension and target the previously build `dist` folder.

Open the browser at the prposed address.

