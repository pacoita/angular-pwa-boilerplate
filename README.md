# AngularPwa

A demo Angular PWA using `performance` and `freshness`caching stretegies.

The APIs used in the demo are:

- https://icanhazdadjoke.com/api
- https://www.worldtradingdata.com/

## 1. Update npm libraries

First install or update your local project's npm dependencies:

```npm install```

## 2. Run a production build

Exceute a production build:

``` ng build --prod ```

This command will generate a dist/angular-pwa folder

## 3. Serve the application

As we cannot use `ne serve` with service workers, you need to run a web server iof your choice. As example: [http server](https://www.npmjs.com/package/http-server) or the [web server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) Chrome extension and target the previously built `dist/angular-pwa` folder.

Open the browser at the proposed address.

