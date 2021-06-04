<h1 align="center">Welcome to the Angular Pwa demo!</h1>
<a href="https://www.npmjs.com/package/@angular/core">
  <img src="https://img.shields.io/badge/Angular-v11.2.11-green.svg" alt="Angular version">
</a>
<span><img src="https://www.pwa-shields.com/1.0.0/series/classic/white/green.svg" alt="PwaShield"></span>
  <br>
<p align="center"> 
  <strong>Follow me on Twitter&nbsp;&nbsp;&nbsp;</strong>
  <a href="https://twitter.com/paco_ita">
    <img alt="Twitter: paco_ita" src="https://img.shields.io/twitter/follow/paco_ita.svg?style=social" target="_blank" />
  </a>
</p>
<br>
This repository shows how to use Progressive Web Apps features in an Angular project. <br><br>
Not only we can cache static assets (.html, .js, .css) and make them available offline, but we can also cache GET responses according to different caching strategies (*performance* and *freshness* strategy). This allows to cover different scenarios in our applications, whether we want to provide blazing fast answers or always up-to-date responses from the network, but allowing to fallback to the cache if the connection is not stable.
<br><br> Do you wanto to learn more about the amazing technologies behind Progressive Web Apps? <br>Then have a look at the 
<a href="https://www.educative.io/courses/zero-to-hero-with-progressive-web-apps" target="_blank"> complete course about PWAs</a> publisehd on Educative learning portal.
<br><br>
  
<p align="center">
  <img width="500" height="400" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Dzohyc-4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/k65j1f6ewz0rq0w5kfl9.PNG">
</p>
<br><br>

<a href="https://pacoita.github.io/angular-pwa-boilerplate/"> You can test the Angular PWA demo here.</a>
<br><br>
The external APIs used are:

- https://icanhazdadjoke.com/api (using the **performance** caching strategy)
- https://api.thecatapi.com/v1/images/search (using the **freshness** caching strategy)

<br><br>

## 1. Update npm libraries

First install or update your local project's npm dependencies:

```npm install```
<br><br>
## 2. Run a production build

Exceute a production build:

``` ng build --prod ```

This command will generate a dist/angular-pwa folder
<br><br>
## 3. Serve the application

As we cannot use `ne serve` with service workers, you need to run a web server iof your choice. As example: [http server](https://www.npmjs.com/package/http-server) or the [web server](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) Chrome extension and target the previously built `dist/angular-pwa` folder.

Open the browser at the proposed address.
<br><br>
## To-do
:white_check_mark: Make the application responsive <br>
:black_square_button: Show notification when a new SW version is available (use swUpdate) <br>
:black_square_button: Introduce Share API


