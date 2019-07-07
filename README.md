<h1 align="center">Welcome to the Angular Pwa demo!</h1>
<p align="center">
  <a href="https://twitter.com/paco_ita">
    <img alt="Twitter: paco_ita" src="https://img.shields.io/twitter/follow/paco_ita.svg?style=social" target="_blank" />
  </a>
  &nbsp;&nbsp;&nbsp;<a href="https://dev.to/paco_ita">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Francesco Leardini's DEV Profile" height="30" width="30">
</a> 

</p>

A demo Angular PWA using `performance` and `freshness`caching stretegies.

This repository is the practical explanation of an article about PWAs, publisehd on [Dev.to](https://dev.to/paco_ita/a-gentle-introduction-to-progressive-web-apps-step-1-24da) 

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

