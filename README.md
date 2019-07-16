<h1 align="center">Welcome to the Angular Pwa demo!</h1>
<p align="center"> 
    <a href="https://www.ruby-lang.org/en/">
    <img src="https://img.shields.io/badge/Angular-v8.1.0-green.svg" alt="ruby version">
  </a>
  &nbsp;&nbsp;&nbsp;
  <strong>Follow me on Twitter or Dev.to:&nbsp;&nbsp;&nbsp;</strong>
  <a href="https://twitter.com/paco_ita">
    <img alt="Twitter: paco_ita" src="https://img.shields.io/twitter/follow/paco_ita.svg?style=social" target="_blank" />
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://dev.to/paco_ita">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Francesco Leardini's DEV Profile" height="30" width="30">
</a> 
</p>
<br>
This repository is the practical counterpart of my article <a href="https://dev.to/paco_ita/create-progressive-web-apps-with-angular-workbox-pwa-builder-step-4-27d#angular">Create Progressive Web Apps with Angular, Workbox, PWA Builder</a> publisehd on Dev.to. The article is part of a series focusing on Progressive Web Apps technologies.
<br><br>
  
<p align="center">
  <img width="500" height="400" src="https://res.cloudinary.com/practicaldev/image/fetch/s--O66SNC6e--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/4paaac35wijuh7u6wtun.png">
</p>
<br><br>

<a href="https://pacoita.github.io/angular-pwa-boilerplate/"> You can test the Angular PWA demo here.</a>
<br><br>
The external APIs used:

- https://icanhazdadjoke.com/api
- https://www.worldtradingdata.com/

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
:black_square_button: Make the application responsive


<br><br>
## Troubleshooting
If, *and only if*, the service worker is not registered when the application is served locally via web server, then you can force explicitly the SW registration.

Add the following snipped in the `main.ts` file:

```javascript
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
        if ('serviceWorker' in navigator && environment.production) {
            navigator.serviceWorker.register('./ngsw-worker.js');
        }
    })
    .catch(console.error);
```

Other users reported issues with some versions of the angular-cli:

[Github issue](https://github.com/angular/angular-cli/issues/13351)

[Github comment](https://github.com/angular/angular-cli/issues/8515#issuecomment-486017106)


